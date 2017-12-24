import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  categories$: Observable<any[]>;

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.categories$ = this.articleService.articleCategories;
  }
}
