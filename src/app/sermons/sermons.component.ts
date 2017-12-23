import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Sermon } from '../sermons/sermon';
import { SermonService } from '../sermons/sermon.service';

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html',
  styleUrls: ['./sermons.component.scss']
})
export class SermonsComponent implements OnInit {
  currentAudioSermon$: Observable<Sermon[]>;
  sermonCategories$: Observable<any>;

  constructor(private sermonService: SermonService) {}

  ngOnInit() {
    // this.currentAudioSermon$ = this.sermonService.latestSermon;
    this.sermonCategories$ = this.sermonService.sermonCategories;
  }
}
