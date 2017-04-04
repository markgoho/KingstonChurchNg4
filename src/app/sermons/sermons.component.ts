import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html',
  styleUrls: ['./sermons.component.scss']
})
export class SermonsComponent implements OnInit {

  

  constructor(private meta: Meta) { }

  ngOnInit() {
    this.meta.addTags([
      { name: 'KEYWORDS', id: 'mKeywords', content: 'Religion and spirituality, Kingston Church of Christ, Sermons.'},
      { name: 'DESCRIPTION', id: 'mDescription', content: 'Lessons from the Bible. CURRENT AUDIO LESSON:  Paul Sails to Rome (Acts27:1-28:15)'}
    ]);
  }

}