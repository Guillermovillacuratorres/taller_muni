import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'crear',
    loadComponent: () => import('./pages/crear/crear.page').then( m => m.CrearPage)
  },
  {
    path: 'ver',
    loadComponent: () => import('./pages/ver/ver.page').then( m => m.VerPage)
  },
  {
    path: 'editar',
    loadComponent: () => import('./pages/editar/editar.page').then( m => m.EditarPage)
  },
];
