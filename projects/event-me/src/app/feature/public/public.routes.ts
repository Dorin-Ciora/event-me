import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () =>
      import('./landing/landing.component').then((m) => m.LandingComponent),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes'),
  },
] as Routes;
