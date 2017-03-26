import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { BibleSaysAboutComponent } from './bible-says-about/bible-says-about.component';

@NgModule({
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ],
  declarations: [AboutUsComponent, BibleSaysAboutComponent]
})
export class AboutUsModule { }
