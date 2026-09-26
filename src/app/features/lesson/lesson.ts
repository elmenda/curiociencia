import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ContentService } from '../../core/services/content.service';
import { ProgressService } from '../../core/services/progress.service';
import { ProgressBar } from '../../shared/components/progress-bar/progress-bar';

@Component({
  selector: 'app-lesson',
  imports: [RouterLink, ProgressBar],
  templateUrl: './lesson.html',
  styleUrl: './lesson.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LessonPage {
  readonly topicId = input.required<string>();
  readonly lessonId = input.required<string>();

  private readonly content = inject(ContentService);
  private readonly progress = inject(ProgressService);
  private readonly router = inject(Router);

  protected readonly index = signal(0);
  protected readonly lesson = computed(() =>
    this.content.getLesson(this.topicId(), this.lessonId()),
  );
  protected readonly section = computed(() => this.lesson()?.sections[this.index()]);
  protected readonly pct = computed(() => {
    const lesson = this.lesson();
    return lesson ? Math.round(((this.index() + 1) / lesson.sections.length) * 100) : 0;
  });

  protected previous(): void {
    this.index.update(value => Math.max(0, value - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  protected next(): void {
    const lesson = this.lesson();
    if (!lesson) return;

    if (this.index() < lesson.sections.length - 1) {
      this.index.update(value => value + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    this.progress.completeLesson(this.topicId(), this.lessonId());
    void this.router.navigate(['/tema', this.topicId()]);
  }
}
