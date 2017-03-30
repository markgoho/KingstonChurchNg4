import { Component, OnInit } from '@angular/core';
import { ArticleService } from "app/articles/article.service";
import { ActivatedRoute } from "@angular/router";
import { Article } from "app/articles/article";

import "rxjs/add/operator/switchMap";
import { Observable } from "rxjs/Observable";
import { MetaDataService } from "app/meta-data.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article: Observable<Article>;

  constructor( private articleService: ArticleService, private route: ActivatedRoute, private meta: MetaDataService) { }

  ngOnInit() {
    this.article = this.route.params.switchMap(data => this.articleService.getArticle(data['article-name']));
    this.article.subscribe((article: Article) => {
      this.meta.setTitle(article.title);
      this.meta.setDescription(article.description);
    });
  }

}
