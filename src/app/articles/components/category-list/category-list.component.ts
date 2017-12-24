import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
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
    // this.articleList = this.route.params.switchMap(data =>
    //   this.articleService.categoryArticles(data['category'])
    // );
  }
}
