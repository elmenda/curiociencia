import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressService } from '../../core/services/progress.service';
@Component({
  selector: 'app-result',
  imports: [RouterLink],
  templateUrl: './result.html',
  styleUrl: './result.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultPage {
  topicId = input.required<string>();
  private progress = inject(ProgressService);
  protected result = this.progress.lastResult();
  protected pct = computed(() =>
    this.result?.total ? Math.round((this.result.score / this.result.total) * 100) : 0,
  );
  protected stars = computed(() =>
    this.pct() >= 90 ? '⭐⭐⭐' : this.pct() >= 70 ? '⭐⭐' : this.pct() >= 50 ? '⭐' : '🌱',
  );
}
