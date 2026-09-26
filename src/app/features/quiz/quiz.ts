import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ContentService } from '../../core/services/content.service';
import { ProgressService } from '../../core/services/progress.service';
import { QuizService } from '../../core/services/quiz.service';
import { type Answer, type Question } from '../../core/models/question.model';
import { ProgressBar } from '../../shared/components/progress-bar/progress-bar';
@Component({
  selector: 'app-quiz',
  imports: [RouterLink, ProgressBar],
  templateUrl: './quiz.html',
  styleUrl: './quiz.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizPage {
  topicId = input.required<string>();
  private content = inject(ContentService);
  private quizService = inject(QuizService);
  private progress = inject(ProgressService);
  private router = inject(Router);
  protected questions = signal<Question[]>([]);
  protected index = signal(0);
  protected selected = signal<string | null>(null);
  protected wrongTry = signal(false);
  protected score = signal(0);
  protected points = signal(0);
  private wrongIds = new Set<string>();
  protected question = computed(() => this.questions()[this.index()]);
  protected pct = computed(() =>
    this.questions().length ? Math.round((this.index() / this.questions().length) * 100) : 0,
  );
  constructor() {
    queueMicrotask(() => {
      const t = this.content.getTopic(this.topicId());
      if (t) this.questions.set(this.quizService.createRound(t.questions, 10));
    });
  }
  protected choose(answer: Answer) {
    if (this.selected()) return;
    const q = this.question();
    if (!q) return;
    if (answer.correct) {
      this.selected.set(answer.id);
      this.score.update(v => v + 1);
      this.points.update(v => v + q.points);
    } else {
      this.wrongTry.set(true);
      this.wrongIds.add(q.id);
    }
  }
  protected continue() {
    if (this.index() < this.questions().length - 1) {
      this.index.update(v => v + 1);
      this.selected.set(null);
      this.wrongTry.set(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const result = {
      topicId: this.topicId(),
      score: this.score(),
      total: this.questions().length,
      points: this.points(),
      wrongQuestionIds: [...this.wrongIds],
    };
    this.progress.saveQuiz(result);
    void this.router.navigate(['/tema', this.topicId(), 'resultado']);
  }
}
