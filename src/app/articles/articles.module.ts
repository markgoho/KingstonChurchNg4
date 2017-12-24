import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ArticlesRoutingModule } from './articles-routing.module';

import { ArticleComponent } from './components/article/article.component';
// import { KingstonSharedModule } from '../shared/shared.module';

import { EditorModule, SharedModule } from 'primeng/primeng';
import { ArticlesComponent } from './containers/articles/articles.component';
import { CreateArticleComponent } from './containers/create-article/create-article.component';
import { ArticleCategoryComponent } from './components/category-list/category-list.component';

@NgModule({
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    EditorModule
  ],
  declarations: [
    ArticlesComponent,
    ArticleComponent,
    CreateArticleComponent,
    ArticleCategoryComponent
  ]
})
export class ArticlesModule {}
