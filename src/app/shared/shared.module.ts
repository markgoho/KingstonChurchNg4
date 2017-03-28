import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioSermonComponent } from './audio-sermon/audio-sermon.component';
import { TinyEditorComponent } from './tiny-editor/tiny-editor.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [AudioSermonComponent, TinyEditorComponent],
  exports: [ AudioSermonComponent, TinyEditorComponent ]
})
export class SharedModule { }
