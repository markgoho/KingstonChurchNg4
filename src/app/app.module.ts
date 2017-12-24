import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { EditorModule, SharedModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { RoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';

import { MetaDataService } from './meta-data.service';
import { ArticleService } from './articles/services/article.service';
import { SermonService } from './sermons/services/sermon.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    EditorModule,
    SharedModule
  ],
  providers: [ArticleService, MetaDataService, SermonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
