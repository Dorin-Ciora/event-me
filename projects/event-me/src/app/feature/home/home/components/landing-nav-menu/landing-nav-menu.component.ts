import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'event-me-landing-nav-menu',
  imports: [ButtonModule, StyleClassModule, RippleModule, RouterModule],
  templateUrl: './landing-nav-menu.component.html',
  styleUrls: ['./landing-nav-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingNavMenuComponent {
  router = inject(Router);
}
