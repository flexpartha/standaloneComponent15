import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { GeneralComponent } from './general/general.component';
//import { DynamicCompComponent } from './general/Dynamic/dynamic-comp/dynamic-comp.component';


@NgModule({
  declarations: [
    GeneralComponent,
    //DynamicCompComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule
  ]
})
export class GeneralModule { }
