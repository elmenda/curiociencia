import { ChangeDetectionStrategy, Component, input } from '@angular/core';
@Component({
  selector: 'app-progress-bar',
  template: '<div class="track"><div class="fill" [style.width.%]="value()"></div></div>',
  styleUrl: './progress-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBar {
  value = input(0);
}
