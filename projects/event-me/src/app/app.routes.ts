import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home/home.component';
import { GeneralLayoutComponent } from './layout/general-layout/general-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [],
  },
  {
    path: 'home',
    loadChildren: () => import('./feature/home/home.routes'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
