import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateArticleComponent } from './containers/create-article/create-article.component';
import { ArticlesComponent } from './containers/articles/articles.component';
import { ArticleCategoryComponent } from './components/category-list/category-list.component';
import { ArticleComponent } from './components/article/article.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'all'
  },
  {
    path: 'create',
    // add auth guard
    component: CreateArticleComponent
  },
  {
    path: 'all',
    component: ArticlesComponent
  },
  {
    path: ':category',
    component: ArticleCategoryComponent,
    children: [{ path: ':article-name', component: ArticleComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule {}
