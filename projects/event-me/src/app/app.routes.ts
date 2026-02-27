import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { authGuard } from './core/guards/auth.guard';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./feature/home/landing.routes'),
      },
      {
        path: 'auth',
        loadChildren: () => import('./feature/auth/auth.routes'),
      },
    ],
  },
  {
    path: 'app',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'event',
        loadChildren: () => import('./feature/event/event.routes'),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
