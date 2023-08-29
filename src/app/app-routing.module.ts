import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'xiaomi',
    loadChildren: () => import('./pages/xiaomi/xiaomi.module').then( m => m.XiaomiPageModule)
  },
  {
    path: 'samsung',
    loadChildren: () => import('./pages/samsung/samsung.module').then( m => m.SamsungPageModule)
  },
  {
    path: 'samsung1',
    loadChildren: () => import('./pages/samsung1/samsung1.module').then( m => m.Samsung1PageModule)
  },
  {
    path: 'samsung2',
    loadChildren: () => import('./pages/samsung2/samsung2.module').then( m => m.Samsung2PageModule)
  },
  {
    path: 'samsung3',
    loadChildren: () => import('./pages/samsung3/samsung3.module').then( m => m.Samsung3PageModule)
  },
  {
    path: 'xiaomi1',
    loadChildren: () => import('./pages/xiaomi1/xiaomi1.module').then( m => m.Xiaomi1PageModule)
  },
  {
    path: 'xiaomi2',
    loadChildren: () => import('./pages/xiaomi2/xiaomi2.module').then( m => m.Xiaomi2PageModule)
  },
  {
    path: 'xiaomi3',
    loadChildren: () => import('./pages/xiaomi3/xiaomi3.module').then( m => m.Xiaomi3PageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
