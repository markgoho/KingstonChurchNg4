import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioSermonComponent } from './audio-sermon/audio-sermon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    QuillModule
  ],
  declarations: [AudioSermonComponent, ],
  exports: [ AudioSermonComponent, QuillModule ]
})
export class SharedModule { }
