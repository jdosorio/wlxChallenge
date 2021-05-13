import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers/guards/auth.guard';
import { AutologinGuard } from './helpers/guards/autologin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home', loadChildren: () => import('./screens/home/home.module').then(m => m.HomeModule),
    canActivate: [AutologinGuard]
  },
  {
    path: 'register', loadChildren: () => import('./screens/register/register.module').then(m => m.RegisterModule),
  },
  {
    path: 'technologies', loadChildren: () => import('./screens/technologies/technologies.module').then(m => m.TechnologiesModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  {
    path: 'termscon', loadChildren: () => import('./screens/termsconditions/termsconditions.module').then(m => m.TermsconditionsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
