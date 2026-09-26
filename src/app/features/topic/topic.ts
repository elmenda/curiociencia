import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../core/services/content.service';
import { ProgressService } from '../../core/services/progress.service';
import { ProgressBar } from '../../shared/components/progress-bar/progress-bar';
@Component({
  selector: 'app-topic',
  imports: [RouterLink, ProgressBar],
  templateUrl: './topic.html',
  styleUrl: './topic.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopicPage {
  topicId = input.required<string>();
  private content = inject(ContentService);
  protected progress = inject(ProgressService);
  protected topic = computed(() => this.content.getTopic(this.topicId()));
  protected percent = computed(() => {
    const t = this.topic();
    if (!t) return 0;
    return Math.round((this.progress.get(t.id).completedLessons.length / t.lessons.length) * 100);
  });
  protected done(id: string) {
    return this.progress.get(this.topicId()).completedLessons.includes(id);
  }
}
