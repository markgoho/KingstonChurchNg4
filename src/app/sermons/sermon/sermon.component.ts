import { Component, OnInit } from '@angular/core';
// import { SermonService } from '../../sermons/sermon.service';
// import { ActivatedRoute } from '@angular/router';
import { MetaDataService } from '../../meta-data.service';
import { Observable } from 'rxjs/Observable';
import { Sermon } from '../../sermons/sermon';

@Component({
  selector: 'app-sermon',
  templateUrl: './sermon.component.html',
  styleUrls: ['./sermon.component.scss']
})
export class SermonComponent implements OnInit {
  sermon: Observable<Sermon[]>;

  constructor(
    // private sermonService: SermonService,
    // private route: ActivatedRoute,
    private meta: MetaDataService
  ) {}

  ngOnInit() {
    // this.sermon = this.route.params.switchMap(data => {
    //   return this.sermonService.getSermon(data['sermon-name']);
    // });
    this.sermon.subscribe((sermon: any) => {
      this.meta.setTitle(sermon.title);
    });
  }
}
