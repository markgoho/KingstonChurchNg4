import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
// import { Sermon } from '../sermons/sermon';

@Injectable()
export class SermonService {
  constructor(private af: AngularFireDatabase) {}

  createSermon(sermon: any) {
    sermon.createdOn = Date.now();
    const { book, chapter, verse } = sermon.scripture;
    sermon.scriptureRef = `${book} ${chapter}:${verse}`;
    // TODO: generate a meta description
    sermon.slug = this.createSlug(sermon.title);
    this.af.list('/sermons').push(sermon);
  }

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

  // get latestSermon(): Observable<Sermon[]> {
  //   return this.af.list('/sermons', {
  //     query: {
  //       orderByChild: 'createdOn',
  //       limitToLast: 1
  //     }
  //   });
  // }

  get sermonCategories(): Observable<any[]> {
    return this.af.list('/sermonCategories').valueChanges();
  }

  // getSermon(sermonName): Observable<Sermon[]> {
  //   return this.af.list('/sermons', {
  //     query: {
  //       orderByChild: 'slug',
  //       equalTo: sermonName
  //     }
  //   });
  // }

  sermonCategory(category: any): Observable<any> {
    return this.af.object(`/sermonCategories/${category}`).valueChanges();
  }

  // sermonsByCategory(category: any): Observable<Sermon[]> {
  //   return this.af.list('/sermons', {
  //     query: {
  //       orderByChild: 'category',
  //       equalTo: category
  //     }
  //   });
  // }
}
