import { Injectable } from '@angular/core';
import { AngularFire } from "angularfire2";
import { Article } from "app/articles/article";
import { Observable } from "rxjs/Observable";
import { MetaDataService } from "app/meta-data.service";

@Injectable()
export class ArticleService {

  constructor(private af: AngularFire, private meta: MetaDataService) { }

  createArticle(article: Article) {
    article.createdOn = Date.now();
    article.description = this.meta.generateDescription(article.content);
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
    // https://gist.github.com/mathewbyrne/1280286
    return title.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }
}