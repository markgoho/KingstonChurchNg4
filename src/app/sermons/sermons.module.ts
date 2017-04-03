import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SermonsRoutingModule } from './sermons-routing.module';
import { SermonsComponent } from './sermons.component';
import { SharedModule } from "app/shared/shared.module";
import { LessonsComponent } from './lessons/lessons.component';
import { CreateSermonComponent } from './create-sermon/create-sermon.component';

@NgModule({
  imports: [
    CommonModule,
    SermonsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [SermonsComponent, LessonsComponent, CreateSermonComponent]
})
export class SermonsModule { }
