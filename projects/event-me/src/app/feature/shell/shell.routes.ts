import { Routes } from '@angular/router';
import { postLoginRedirectGuard } from '../../core/guards/post-login-redirect.guard';
import { createEventGuard } from '../../core/guards/create-event.guard';

export default [
  {
    path: '',
    canActivate: [postLoginRedirectGuard],
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    // loadComponent: () =>
    //   import('./dashboard/dashboard.component').then(
    //     (m) => m.DashboardComponent
    //   ),
    data: { sidebarMode: 'app' },
  },
  {
    path: 'create-event',
    canActivate: [createEventGuard],
    loadComponent: () =>
      import('./event/create-event/create-event.component').then(
        (m) => m.CreateEventComponent
      ),
    data: { sidebarMode: 'none' },
  },
  {
    path: 'event/:eventId',
    // loadChildren: () =>
    //   import('./event/event.routes').then((m) => m.EVENT_ROUTES),
    data: { sidebarMode: 'event' },
  },
] as Routes;
