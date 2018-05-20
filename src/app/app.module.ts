import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ArtComponent } from './art/art.component';
import { ArtDetailComponent } from './art-detail/art-detail.component';
import { ArtCreateComponent } from './art-create/art-create.component';
import { ArtEditComponent } from './art-edit/art-edit.component';

const appRoutes: Routes = [
  {
    path: 'art',
    component: ArtComponent,
    data: { title: 'Art List' }
  },
  {
    path: 'art-details/:id',
    component: ArtDetailComponent,
    data: { title: 'Art Details' }
  },
  {
    path: 'art-create',
    component: ArtCreateComponent,
    data: { title: 'Create Art' }
  },
  {
    path: 'art-edit/:id',
    component: ArtEditComponent,
    data: { title: 'Edit Art' }
  },
  { path: '',
    redirectTo: '/art',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ArtComponent,
    ArtDetailComponent,
    ArtCreateComponent,
    ArtEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
