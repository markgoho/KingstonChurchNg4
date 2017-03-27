import { Injectable } from '@angular/core';
import { AngularFire } from "angularfire2";
import { Article } from "app/articles/article";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ArticleService {

  constructor(private af: AngularFire) { }

  createArticle(article: Article) {
    article.createdOn = Date.now()
    this.af.database.list('/articles').push(article);
  }

  get articleCategories(): Observable<any[]> {
    return this.af.database.list('/articleCategories');
  }
}