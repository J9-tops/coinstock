import { Routes } from '@angular/router';
import { HomePage } from './components/home-page/home-page';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'dashboard',
    component: Dashboard,
  },
];
