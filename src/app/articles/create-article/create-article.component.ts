import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArticleService } from "../article.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  categories$: Observable<any[]>
  
  form = this.fb.group({
    title: '',
    category: '',
    content: ''
  });

  constructor( private fb: FormBuilder, private articleService: ArticleService ) {}

  ngOnInit() {
    this.categories$ = this.articleService.articleCategories;
  }

  onSubmit() {
    this.articleService.createArticle(this.form.value);
    this.form.reset();
  }
}
