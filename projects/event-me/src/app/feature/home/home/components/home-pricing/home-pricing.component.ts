import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'event-me-home-pricing',
  imports: [ButtonModule, DividerModule],
  templateUrl: './home-pricing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePricingComponent {}
