import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'destinations',
    loadComponent: () => import('./features/discovery/discovery').then((m) => m.Discovery),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
