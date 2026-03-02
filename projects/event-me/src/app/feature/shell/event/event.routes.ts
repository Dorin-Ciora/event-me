import { Routes } from '@angular/router';

export default [
  {
    path: 'overview',
    // loadComponent: () =>
    //   import('./overview/event-overview.component').then(
    //     (m) => m.EventOverviewComponent
    //   ),
  },
  {
    path: 'notes',
    // loadComponent: () =>
    //   import('./notes/event-notes.component').then(
    //     (m) => m.EventNotesComponent
    //   ),
  },
  {
    path: 'guests',
    // loadComponent: () =>
    //   import('./guests/event-guests.component').then(
    //     (m) => m.EventGuestsComponent
    //   ),
  },
  {
    path: 'budget',
    // loadComponent: () =>
    //   import('./budget/event-budget.component').then(
    //     (m) => m.EventBudgetComponent
    //   ),
  },
  { path: '', pathMatch: 'full', redirectTo: 'overview' },
] as Routes;
