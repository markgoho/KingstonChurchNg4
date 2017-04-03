import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RoutingModule } from "app/app-routing.module";
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BibleStudiesComponent } from './bible-studies/bible-studies.component';
import { SharedModule } from "app/shared/shared.module";
import { ArticleService } from "app/articles/article.service";
import { MetaDataService } from "app/meta-data.service";
import { SermonService } from "app/sermons/sermon.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    BibleStudiesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    SharedModule,
    RoutingModule,
  ],
  providers: [
    ArticleService, 
    MetaDataService,
    SermonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
