import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'event-me-home-features',
  imports: [StyleClassModule, RippleModule],
  templateUrl: './home-features.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeFeaturesComponent {}
