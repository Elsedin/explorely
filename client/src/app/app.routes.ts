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
    path: 'destinations/:id',
    loadComponent: () =>
      import('./features/destinations/destination-detail/destination-detail').then(
        (m) => m.DestinationDetail,
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
