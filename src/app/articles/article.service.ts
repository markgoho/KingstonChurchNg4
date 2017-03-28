import { Injectable } from '@angular/core';
import { AngularFire } from "angularfire2";
import { Article } from "app/articles/article";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ArticleService {

  constructor(private af: AngularFire) { }

  createArticle(article: Article) {
    article.createdOn = Date.now();
    const slug = this.createSlug(article.title);
    this.af.database.object(`/articles/${slug}`).set(article);
  }

  get articleCategories(): Observable<any[]> {
    return this.af.database.list('/articleCategories');
  }

  articleCategory(category): Observable<any> {
    return this.af.database.object(`/articleCategories/${category}`);
  }

  categoryArticles(category): Observable<any[]> {
    return this.af.database.list(`/articles`, { 
      query: {
        orderByChild: 'category',
        equalTo: category
      }
    });
  }

  getArticle(slug: string): Observable<Article> {
    return this.af.database.object(`/articles/${slug}`);
  }

  // Helper function, turns title into slug
  createSlug(title: string): string {
    return title.replace(/\s+/g, '-').toLowerCase();
  }
}