import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'event-me-landing-features',
  imports: [StyleClassModule, RippleModule],
  templateUrl: './landing-features.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingFeaturesComponent {}
