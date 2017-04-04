import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SermonsComponent } from "app/sermons/sermons.component";
import { CreateSermonComponent } from "app/sermons/create-sermon/create-sermon.component";
import { SermonComponent } from "app/sermons/sermon/sermon.component";
import { SermonCategoryComponent } from "app/sermons/sermon-category/sermon-category.component";

const routes: Routes = [
  { path: 'create', component: CreateSermonComponent },
  { 
    path: '', children: [
      { path: '', component: SermonsComponent },
      { 
        path: ':category',
        component: SermonCategoryComponent,
        children: [
          { path: ':sermon-name', component: SermonComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SermonsRoutingModule {}
