import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsiveTemplateRoutingModule } from './responsive-template-routing.module';
import { ResponsiveTmpltComponent } from './responsive-tmplt/responsive-tmplt.component';


@NgModule({
  declarations: [
    ResponsiveTmpltComponent
  ],
  imports: [
    CommonModule,
    ResponsiveTemplateRoutingModule
  ]
})
export class ResponsiveTemplateModule { }
