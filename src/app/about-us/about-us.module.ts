import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './containers/about-us/about-us.component';
import { BibleSaysAboutComponent } from './components/bible-says-about/bible-says-about.component';

@NgModule({
  imports: [CommonModule, AboutUsRoutingModule],
  declarations: [AboutUsComponent, BibleSaysAboutComponent]
})
export class AboutUsModule {}
