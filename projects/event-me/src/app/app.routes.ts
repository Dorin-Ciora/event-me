import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { authGuard } from './core/guards/auth.guard';
import { ShellLayoutComponent } from './layout/shell-layout/shell-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    loadChildren: () => import('./feature/public/public.routes'),
  },
  {
    path: 'app',
    component: ShellLayoutComponent,
    canActivate: [authGuard],
    loadChildren: () => import('./feature/shell/shell.routes'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
