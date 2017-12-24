import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSermonComponent } from './containers/create-sermon/create-sermon.component';
import { SermonsComponent } from './containers/sermons/sermons.component';
import { SermonComponent } from './components/sermon/sermon.component';
import { SermonCategoryComponent } from './components/category-list/sermon-category.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'all'
  },
  { path: 'create', component: CreateSermonComponent },
  { path: 'all', component: SermonsComponent },
  {
    path: ':category',
    component: SermonCategoryComponent,
    children: [{ path: ':sermon-name', component: SermonComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SermonsRoutingModule {}
