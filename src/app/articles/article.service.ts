import { Injectable } from '@angular/core';
import { AngularFire } from "angularfire2";
import { Article } from "app/articles/article";

@Injectable()
export class ArticleService {

  constructor(private af: AngularFire) { }

  createArticle(article: Article) {
    this.af.database.list('articles').push(article);
  }
}
