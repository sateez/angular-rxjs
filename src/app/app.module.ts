import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDZjRmkh-luD-VGUocuwyPj-TuHRc4v5G4",
  authDomain: "games-ed1fe.firebaseapp.com",
  databaseURL: "https://games-ed1fe.firebaseio.com",
  projectId: "games-ed1fe",
  storageBucket: "games-ed1fe.appspot.com",
  messagingSenderId: "1053986152180"
};

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
