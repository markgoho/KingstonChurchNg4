import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SermonsRoutingModule } from './sermons-routing.module';
import { SermonsComponent } from './sermons.component';
import { SharedModule } from "app/shared/shared.module";
import { LessonsComponent } from './lessons/lessons.component';

@NgModule({
  imports: [
    CommonModule,
    SermonsRoutingModule,
    SharedModule,
  ],
  declarations: [SermonsComponent, LessonsComponent]
})
export class SermonsModule { }
