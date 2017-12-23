import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SermonService } from '../../sermons/sermon.service';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-sermon-category',
  templateUrl: './sermon-category.component.html',
  styleUrls: ['./sermon-category.component.scss']
})
export class SermonCategoryComponent implements OnInit {
  category: Observable<string>;
  sermonList: Observable<any[]>;

  constructor(
    private route: ActivatedRoute,
    private sermonService: SermonService
  ) {}

  ngOnInit() {
    this.category = this.route.params.switchMap(data => {
      return this.sermonService.sermonCategory(data['category']);
    });
    this.sermonList = this.route.params.switchMap(data => {
      return this.sermonService.sermonsByCategory(data['category']);
    });
  }
}
