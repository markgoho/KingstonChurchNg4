import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  categories$: Observable<any[]>;

  initialContent: string;

  form = this.fb.group({
    title: ['', Validators.required],
    category: ['', Validators.required],
    content: ''
  });

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    this.categories$ = this.articleService.articleCategories;
  }

  onSubmit() {
    this.articleService.createArticle(this.form.value);
    this.form.reset();
  }
}
