import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { ArticlesRoutingModule } from './articles-routing.module';

import { ArticlesComponent } from './articles.component';
import { ArticleComponent } from './article/article.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { ArticleCategoryComponent } from './article-category/article-category.component';
import { KingstonSharedModule } from "app/shared/shared.module";

import { EditorModule, SharedModule } from 'primeng/primeng';

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
export class ArticlesModule { }
