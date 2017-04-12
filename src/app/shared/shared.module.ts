import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioSermonComponent } from './audio-sermon/audio-sermon.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [AudioSermonComponent, ],
  exports: [ AudioSermonComponent ]
})
export class KingstonSharedModule { }
