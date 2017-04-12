import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SermonsRoutingModule } from './sermons-routing.module';
import { SermonsComponent } from './sermons.component';
import { KingstonSharedModule } from "app/shared/shared.module";
import { CreateSermonComponent } from './create-sermon/create-sermon.component';
import { SermonComponent } from './sermon/sermon.component';
import { SermonCategoryComponent } from './sermon-category/sermon-category.component';

@NgModule({
  imports: [
    CommonModule,
    SermonsRoutingModule,
    KingstonSharedModule,
    ReactiveFormsModule
  ],
  declarations: [SermonsComponent, CreateSermonComponent, SermonComponent, SermonCategoryComponent]
})
export class SermonsModule { }
