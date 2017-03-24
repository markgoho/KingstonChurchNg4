import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SermonsComponent } from "app/sermons/sermons.component";
import { LessonsComponent } from "app/sermons/lessons/lessons.component";

const routes: Routes = [
  { path: 'sermons', component: SermonsComponent },
  { path: 'sermons/:lesson', component: LessonsComponent }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SermonsRoutingModule {}
