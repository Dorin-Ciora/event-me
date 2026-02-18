import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './layout/landing-layout/landing-layout.component';
import { authGuard } from './core/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    loadChildren: () => import('./feature/home/landing.routes'),
  },
  {
    path: 'auth',
    component: PublicLayoutComponent,
    loadChildren: () => import('./feature/auth/auth.routes'),
  },
  {
    path: 'events',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./feature/events/event.component').then((m) => m.EventComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
