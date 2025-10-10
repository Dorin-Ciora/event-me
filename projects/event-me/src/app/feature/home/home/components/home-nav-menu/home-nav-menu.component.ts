import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'event-me-home-nav-menu',
  imports: [ButtonModule, StyleClassModule, RippleModule],
  templateUrl: './home-nav-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeNavMenuComponent {
  router = inject(Router);
}
