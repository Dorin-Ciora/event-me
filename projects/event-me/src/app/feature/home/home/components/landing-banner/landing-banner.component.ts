import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'event-me-landing-banner',
  imports: [ButtonModule],
  templateUrl: './landing-banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingBannerComponent {}
