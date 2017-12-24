import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Article } from '../models/article';
import { MetaDataService } from '../../meta-data.service';

@Injectable()
export class ArticleService {
  constructor(private af: AngularFireDatabase, private meta: MetaDataService) {}

  createArticle(article: Article) {
    article.createdOn = Date.now();
    article.description = this.meta.generateDescription(article.content);
    const slug = this.createSlug(article.title);
    this.af.object(`/articles/${slug}`).set(article);
  }

  get articleCategories(): Observable<any[]> {
    return this.af.list('/articleCategories').valueChanges();
  }

  articleCategory(category: any): Observable<any> {
    return this.af.object(`/articleCategories/${category}`).valueChanges();
  }

  // categoryArticles(category: any): Observable<any[]> {
  //   return this.af.list(`/articles`, {
  //     query: {
  //       orderByChild: 'category',
  //       equalTo: category
  //     }
  //   }).valueChanges();
  // }

  getArticle(slug: string): Observable<any> {
    return this.af.object(`/articles/${slug}`).valueChanges();
  }

  // Helper function, turns title into slug
  createSlug(title: string): string {
    // https://gist.github.com/mathewbyrne/1280286
    return title
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
  }
}
