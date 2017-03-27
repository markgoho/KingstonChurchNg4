import { Component, OnInit } from '@angular/core';
import { ArticleService } from "app/articles/article.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  categories$: Observable<any[]>

  constructor( private articleService: ArticleService ) { }

  ngOnInit() {
    this.categories$ = this.articleService.articleCategories;
  }

}
