import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Observable } from "rxjs/Observable";
import { Sermon } from "app/sermons/sermon";
import { SermonService } from "app/sermons/sermon.service";

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html',
  styleUrls: ['./sermons.component.scss']
})
export class SermonsComponent implements OnInit {

  currentAudioSermon$: Observable<Sermon[]>;
  sermonCategories$: Observable<any>;

  constructor(private sermonService: SermonService) { }

  ngOnInit() {
    this.currentAudioSermon$ = this.sermonService.latestSermon;
    this.sermonCategories$ = this.sermonService.sermonCategories;
  }

}