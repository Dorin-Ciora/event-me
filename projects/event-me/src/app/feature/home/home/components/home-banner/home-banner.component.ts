import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'event-me-home-banner',
  imports: [ButtonModule],
  templateUrl: './home-banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeBannerComponent {}
