import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from "../article.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  categories$: Observable<any[]>

  initialContent: string;
  
  form = this.fb.group({
    title: ['', Validators.required],
    category: ['', Validators.required],
    content: ''
  });

  constructor( private fb: FormBuilder, private articleService: ArticleService ) {}

  ngOnInit() {
    this.categories$ = this.articleService.articleCategories;
    this.initialContent = this.form.get('content').value;
  }

  onSubmit() {
    this.articleService.createArticle(this.form.value);
    this.form.reset();
    this.initialContent = '';
  }

  handleContentChange(event) {
    this.form.patchValue({ content: event });
  }
}
