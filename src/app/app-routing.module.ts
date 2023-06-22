import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminrouteguardGuard } from './adminrouteguard.guard';
import { LoginComponent } from './login/login.component';
import { ManagementguardGuard } from './managementguard.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '', redirectTo:'login', pathMatch:'full'
  },
  {
    path: 'login', component:LoginComponent
  },
  {
    path:'admin', loadChildren: ()=> import('./administration/administration.module').then(mod =>mod.AdministrationModule),
    canActivate:[AdminrouteguardGuard]
  },
  {
    path: 'manage', loadChildren: () => import('./management/management.module').then(mod => mod.ManagementModule),
    canActivate:[ManagementguardGuard]
  },
  {
    path: '**', component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
