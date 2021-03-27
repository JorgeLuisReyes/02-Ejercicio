import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRoutingModule } from './auth/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';

import { Pages404Component } from './pages404/pages404.component';

const routes: Routes = [
  //path: '/pages' PagesRouting
  //path: '/auth' AuthRouting
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: Pages404Component },
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }