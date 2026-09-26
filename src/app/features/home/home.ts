import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../core/services/content.service';
import { ProgressService } from '../../core/services/progress.service';
import { ProgressBar } from '../../shared/components/progress-bar/progress-bar';
@Component({
  selector: 'app-home',
  imports: [RouterLink, ProgressBar],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  private content = inject(ContentService);
  protected progress = inject(ProgressService);
  protected topics = this.content.getTopics();
  protected lessonProgress(id: string, total: number) {
    return total ? Math.round((this.progress.get(id).completedLessons.length / total) * 100) : 0;
  }
}
