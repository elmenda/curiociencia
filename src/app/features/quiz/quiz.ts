import { ChangeDetectionStrategy, Component, computed, effect, inject, input, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ContentService } from '../../core/services/content.service';
import { ProgressService } from '../../core/services/progress.service';
import { QuizService } from '../../core/services/quiz.service';
import { type Answer, type Question } from '../../core/models/question.model';
import { SALUD_PRACTICAS } from '../../content/topic-01/salud-practicas.questions';
import { ProgressBar } from '../../shared/components/progress-bar/progress-bar';

@Component({
  selector: 'app-quiz',
  imports: [RouterLink, ProgressBar],
  templateUrl: './quiz.html',
  styleUrl: './quiz.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizPage {
  readonly topicId = input<string>('');
  readonly lessonId = input<string>('');
  private readonly content = inject(ContentService);
  private readonly quizService = inject(QuizService);
  private readonly progress = inject(ProgressService);
  private readonly router = inject(Router);
  protected readonly questions = signal<Question[]>([]);
  protected readonly index = signal(0);
  protected readonly selected = signal<string | null>(null);
  protected readonly wasCorrect = signal(false);
  protected readonly score = signal(0);
  protected readonly points = signal(0);
  private readonly wrongIds = new Set<string>();
  protected readonly isExam = computed(() => !this.lessonId());
  protected readonly lesson = computed(() => this.content.getLesson(this.topicId(), this.lessonId()));
  protected readonly question = computed(() => this.questions()[this.index()]);
  protected readonly pct = computed(() => this.questions().length ? Math.round((this.index() / this.questions().length) * 100) : 0);

  constructor() {
    effect(() => {
      const topicId = this.topicId();
      if (!topicId) return;
      const lessonId = this.lessonId();
      const topic = this.content.getTopic(topicId);
      if (!topic) return;
      const bank = lessonId ? (SALUD_PRACTICAS[lessonId] ?? []) : topic.questions;
      this.questions.set(this.quizService.createRound(bank, lessonId ? bank.length : topic.questions.length));
      this.index.set(0); this.selected.set(null); this.wasCorrect.set(false);
      this.score.set(0); this.points.set(0); this.wrongIds.clear();
    });
  }

  protected choose(answer: Answer): void {
    if (this.selected()) return;
    const question = this.question();
    if (!question) return;
    this.selected.set(answer.id);
    this.wasCorrect.set(answer.correct);
    if (answer.correct) {
      this.score.update(value => value + 1);
      this.points.update(value => value + question.points);
    } else {
      this.wrongIds.add(question.id);
    }
  }

  protected correctAnswer(question: Question): string {
    return question.answers.find(answer => answer.correct)?.text ?? '';
  }

  protected continue(): void {
    if (this.index() < this.questions().length - 1) {
      this.index.update(value => value + 1);
      this.selected.set(null);
      this.wasCorrect.set(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const result = {
      topicId: this.topicId(),
      lessonId: this.lessonId() || undefined,
      score: this.score(),
      total: this.questions().length,
      points: this.points(),
      wrongQuestionIds: [...this.wrongIds],
    };
    if (this.isExam()) this.progress.saveQuiz(result);
    else this.progress.savePractice(result);
    void this.router.navigate(['/tema', this.topicId(), 'resultado']);
  }
}
