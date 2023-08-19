import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AdminrouteguardGuard } from './adminrouteguard.guard';
import { LoginComponent } from './login/login.component';
import { ManagementguardGuard } from './managementguard.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { adminRouteGuard } from './adminrouteguard.guard';

export const routes: Routes = [
  {
    path: '', redirectTo:'login', pathMatch:'full'
  },
  {
    path: 'login', component:LoginComponent
  },
  {
    path:'admin', loadChildren: ()=> import('./administration/administration.module').then(mod =>mod.AdministrationModule),
    canActivate:[adminRouteGuard]
  },
  {
    path: 'manage', loadChildren: () => import('./management/management.module').then(mod => mod.ManagementModule),
    canActivate:[ManagementguardGuard]
  },
  {
    path: 'general', loadChildren: () => import('./General/general.module').then(mod => mod.GeneralModule)
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
