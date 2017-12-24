import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SermonsRoutingModule } from './sermons-routing.module';
import { SermonsComponent } from './containers/sermons/sermons.component';
import { CreateSermonComponent } from './containers/create-sermon/create-sermon.component';
import { SermonComponent } from './components/sermon/sermon.component';
import { SermonCategoryComponent } from './components/category-list/sermon-category.component';

@NgModule({
  imports: [CommonModule, SermonsRoutingModule, ReactiveFormsModule],
  declarations: [
    SermonsComponent,
    CreateSermonComponent,
    SermonComponent,
    SermonCategoryComponent
  ]
})
export class SermonsModule {}
