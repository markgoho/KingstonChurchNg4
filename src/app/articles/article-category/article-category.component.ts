import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ArticleService } from '../../articles/article.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-article-category',
  templateUrl: './article-category.component.html',
  styleUrls: ['./article-category.component.scss']
})
export class ArticleCategoryComponent implements OnInit {
  category: Observable<string>;
  articleList: Observable<any[]>;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    this.category = this.route.params.switchMap(data => {
      return this.articleService.articleCategory(data['category']);
    });
    this.articleList = this.route.params.switchMap(data =>
      this.articleService.categoryArticles(data['category'])
    );
  }
}
