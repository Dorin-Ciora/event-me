import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'event-me-landing-pricing',
  imports: [ButtonModule, DividerModule],
  templateUrl: './landing-pricing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPricingComponent {}
