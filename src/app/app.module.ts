import { NgModule }      from '@angular/core';
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserModule,  } from '@angular/platform-browser';
// import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {routing} from "./app.routes";
import {Home} from "./components/home/home";
import {Users} from './components/users/users';
import {User} from './components/users/user';
import {Groups} from './components/groups/groups';
import {Group} from './components/groups/group';

@NgModule({
  imports:      [/*BrowserAnimationsModule, */BrowserModule, FormsModule, HttpModule, ReactiveFormsModule, routing],
  entryComponents: [Home, Groups, Users],
  declarations: [ Home, Group, Groups, User, Users  ],
  bootstrap:    [ Home ]
})
export class AppModule { }