import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioSermonComponent } from './audio-sermon/audio-sermon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AudioSermonComponent],
  exports: [ AudioSermonComponent ]
})
export class SharedModule { }
