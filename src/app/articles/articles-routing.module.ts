import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from "app/articles/articles.component";
import { ArticleComponent } from "app/articles/article/article.component";
import { CreateArticleComponent } from "app/articles/create-article/create-article.component";
import { ArticleCategoryComponent } from "app/articles/article-category/article-category.component";

const routes: Routes = [
  {
    path: 'articles/create', component: CreateArticleComponent
  },
  { 
    path: 'articles', component: ArticlesComponent
  },
  { 
    path: 'articles/:category',
    component: ArticleCategoryComponent,
    // children: [
    //   { path: ':article-name'}
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
