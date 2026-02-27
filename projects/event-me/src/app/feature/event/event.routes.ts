import { Routes } from '@angular/router';

export default [
  {
    path: 'create',
    loadComponent: () =>
      import('./pages/create/create-event.component').then(
        (m) => m.CreateEventComponent
      ),
  },
  //   {
  //     path: 'details:id',
  //     loadComponent: () =>
  //       import('./pages/register/register.component').then(
  //         (m) => m.RegisterComponent
  //       ),
  //   },
] as Routes;
