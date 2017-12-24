import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreComponent } from './containers/core/core.component';
import { HeaderComponent } from './containers/header/header.component';
import { FooterComponent } from './containers/footer/footer.component';
import { NavBarComponent } from './containers/nav-bar/nav-bar.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: '',
        loadChildren: '../home/home.module#HomeModule'
      },
      {
        path: 'articles',
        loadChildren: '../articles/articles.module#ArticlesModule'
      },
      {
        path: 'about',
        loadChildren: '../about-us/about-us.module#AboutUsModule'
      },
      {
        path: 'contact',
        loadChildren: '../contact/contact.module#ContactModule'
      },
      {
        path: 'resources',
        loadChildren: '../resources/resources.module#ResourcesModule'
      },
      {
        path: 'sermons',
        loadChildren: '../sermons/sermons.module#SermonsModule'
      },
      {
        path: 'visitors',
        loadChildren: '../visitors/visitors.module#VisitorsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [
    CoreComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent
  ],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
