import { Routes } from '@angular/router';
import { GeneralLayoutComponent } from './layout/general-layout/general-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: GeneralLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./feature/home/home.routes'),
      },
    ],
  },

  {
    path: '**',
    redirectTo: '',
  },
];
