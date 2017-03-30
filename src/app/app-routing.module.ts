import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home/home.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'articles', loadChildren: 'app/articles/articles.module#ArticlesModule'
  },
  {
    path: 'about', loadChildren: 'app/about-us/about-us.module#AboutUsModule'
  },
  {
    path: 'contact', loadChildren: 'app/contact/contact.module#ContactModule'
  },
  {
    path: 'resources', loadChildren: 'app/resources/resources.module#ResourcesModule'
  },
  {
    path: 'sermons', loadChildren: 'app/sermons/sermons.module#SermonsModule'
  },
  {
    path: 'visitors', loadChildren: 'app/visitors/visitors.module#VisitorsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }