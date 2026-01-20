import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './layout/landing-layout/landing-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./feature/home/landing.routes'),
      },
    ],
  },

  {
    path: '**',
    redirectTo: '',
  },
];
