import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SermonsComponent } from "app/sermons/sermons.component";
import { LessonsComponent } from "app/sermons/lessons/lessons.component";
import { CreateSermonComponent } from "app/sermons/create-sermon/create-sermon.component";

const routes: Routes = [
  { path: '', component: SermonsComponent },
  { path: 'create', component: CreateSermonComponent },
  { path: ':lesson', component: LessonsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SermonsRoutingModule {}
