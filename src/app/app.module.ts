import { NgModule }      from '@angular/core';
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserModule,  } from '@angular/platform-browser';
// import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {routing} from "./app.routes";
import {App} from "./app.component";
import {Home} from "./components/home/home";
import {Users} from './components/users/users';
import {User} from './components/users/user';
import {Groups} from './components/groups/groups';
import {Group} from './components/groups/group';
import {UserService} from './services/user-service';
import {GroupService} from './services/group-service';

import {GroupsController} from './controllers/groups-controller';

@NgModule({
  imports:      [/*BrowserAnimationsModule, */BrowserModule, HttpModule, routing],
  entryComponents: [Home, Groups, Users],
  providers: [UserService, GroupService, GroupsController],
  declarations: [ App, Home, Group, Groups, User, Users  ],
  bootstrap:    [ App ]
})
export class AppModule { }
