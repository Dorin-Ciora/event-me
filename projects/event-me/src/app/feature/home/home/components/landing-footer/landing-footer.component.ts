import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'event-me-landing-footer',
  imports: [],
  templateUrl: './landing-footer.component.html',
  styleUrl: './landing-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingFooterComponent {
  router = inject(Router);
}
