import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';



@Injectable()
export class SermonService {

  constructor(private af: AngularFire) { }

  createSermon(sermon) {
    sermon.createdOn = Date.now();
    // TODO: generate a meta description
    sermon.slug = this.createSlug(sermon.title);
    this.af.database.list(`/sermons`).push(sermon);
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

}
