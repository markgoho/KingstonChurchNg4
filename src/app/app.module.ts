import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BibleStudiesComponent } from './bible-studies/bible-studies.component';
import { KingstonSharedModule } from './shared/shared.module';
import { ArticleService } from './articles/article.service';
import { MetaDataService } from './meta-data.service';
import { SermonService } from './sermons/sermon.service';
import { EditorModule, SharedModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    BibleStudiesComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    KingstonSharedModule,
    RoutingModule,
    BrowserAnimationsModule,
    EditorModule,
    SharedModule
  ],
  providers: [ArticleService, MetaDataService, SermonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
