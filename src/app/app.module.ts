import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { Pages404Component } from './pages404/pages404.component';

@NgModule({
  declarations: [
    AppComponent,
    Pages404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
