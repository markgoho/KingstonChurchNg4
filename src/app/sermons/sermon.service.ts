import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Observable } from "rxjs/Observable";
import { Sermon } from "app/sermons/sermon";

@Injectable()
export class SermonService {

  constructor(private af: AngularFire) { }

  createSermon(sermon) {
    sermon.createdOn = Date.now();
    let {book, chapter, verse} = sermon.scripture;
    sermon.scriptureRef = `${book} ${chapter}:${verse}`
    // TODO: generate a meta description
    sermon.slug = this.createSlug(sermon.title);
    this.af.database.list('/sermons').push(sermon);
  }

  createSlug(title: string): string {
    // https://gist.github.com/mathewbyrne/1280286
    return title.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }

  get latestSermon(): Observable<Sermon[]> {
    return this.af.database.list('/sermons', 
      { 
        query: {
          orderByChild: 'createdOn',
          limitToLast: 1
        } 
      }
    )
  }

  get sermonCategories(): Observable<any[]> {
    return this.af.database.list('/sermonCategories');
  }

  getSermon(sermonName): Observable<Sermon[]> {
    return this.af.database.list('/sermons', 
      { 
        query: {
          orderByChild: 'slug',
          equalTo: sermonName
        } 
      }
    )
  }

  sermonCategory(category): Observable<any> {
    return this.af.database.object(`/sermonCategories/${category}`);
  }

  sermonsByCategory(category): Observable<Sermon[]> {
    return this.af.database.list('/sermons', 
      { 
        query: {
          orderByChild: 'category',
          equalTo: category
        } 
      }
    )
  }

}
