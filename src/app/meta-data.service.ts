import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable()
export class MetaDataService {

  constructor(private meta: Meta, private title: Title) { }

  generateDescription(content: string): string {
    // First strip HTML from string,
    // cf. http://stackoverflow.com/questions/822452/strip-html-from-text-javascript
    // Second, limit the string 155 characters breaking on spaces
    // cf. http://stackoverflow.com/questions/5454235/javascript-shorten-string-without-cutting-words
    return content.replace(/<(?:.|\n)*?>/gm, '').replace(/^(.{155}[^\s]*).*/, "$1");
  }

  setDescription(description: string) {
    this.meta.removeTag('description');
    this.meta.addTag({
      name: 'description',
      description: description
    });
  }

  setTitle(title: string) {
    this.title.setTitle(`Kingston Church of Christ - ${title}`);
  }

}
