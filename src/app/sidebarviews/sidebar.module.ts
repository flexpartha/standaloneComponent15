import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarRoutingModule } from './sidebar-routing.module';
import { SidebarmainComponent } from './sidebarmain/sidebarmain.component';
import { SidebardashboardComponent } from './sidebardashboard/sidebardashboard.component';


@NgModule({
  declarations: [
    SidebarmainComponent,
    SidebardashboardComponent
  ],
  imports: [
    CommonModule,
    SidebarRoutingModule
  ]
})
export class SidebarModule { }
