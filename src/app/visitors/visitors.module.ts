import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorsRoutingModule } from './visitors-routing.module';
import { VisitorsComponent } from './visitors.component';

@NgModule({
  imports: [CommonModule, VisitorsRoutingModule],
  declarations: [VisitorsComponent]
})
export class VisitorsModule {}
