import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'event-me-events',
  template: `
    <h2>Events</h2>
    <button (click)="logout()">Logout</button>
  `,
})
export class EventsComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  async logout() {
    await this.auth.signOut();
    this.router.navigateByUrl('/auth/login');
  }
}
