/**
 * Created by denisziegler on 5/25/17.
 */

import annyang from 'annyang';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {SpeechOptions} from "../interfaces/speech-options";

import {User} from '../models/user';
import {Group} from '../models/group';

@Injectable()
export class SpeechService {

  private _commands: any;
  private _router: Router;
  private _currentCommand: string;

  constructor() {

  }

  private userSaid(userSaid: string, commandText: string, phrases: string[] = []) {
    // console.log(userSaid);
    this._currentCommand = userSaid;
  }

  get currentCommand(): string {
    return this._currentCommand;
  }

  configureCommands(options: SpeechOptions) {
    this._router = options.router;
    this._commands = {
      'listen up': () => {
        annyang.addCallback('resultMatch', this.userSaid, null);
      },
      'see users': () => {
        annyang.addCallback('resultMatch', this.userSaid, null);
        this._router.navigate(['/users']);
      },
      'view users': () => {
        annyang.addCallback('resultMatch', this.userSaid, null);
        this._router.navigate(['/users']);
      },
      'see groups': () => {
        annyang.addCallback('resultMatch', this.userSaid, null);
        this._router.navigate(['/groups']);
      },
      'view groups': () => {
        annyang.addCallback('resultMatch', this.userSaid, null);
        this._router.navigate(['/groups']);
      },
      'go home': () => {
        annyang.addCallback('resultMatch', this.userSaid, null);
        this._router.navigate(['/']);
      },
      'add user *userName': (userName: string) => {
        let user = new User(userName);
        options.userService.setEditingUser(user);
        this._router.navigate(['/users/add']);
      },
      'add group *groupName': (groupName: string) => {
        if (options.router.url === "/users/add") {
          let editingUser = options.userService.editingUser;
          let foundGroup = options.groupService.findByName(groupName);
          if(foundGroup) {
            editingUser.addGroup(foundGroup);
          }
        }
        else {
          let group = new Group(groupName);
          options.groupService.add(group);
        }
      },
      'finish': (groupName: string) => {
        if (options.router.url === "/users/add") {
          options.userService.finishEditing();
          this._router.navigate(['/users']);
        }
      },
      'finished': (groupName: string) => {
        if (options.router.url === "/users/add") {
          options.userService.finishEditing();
          this._router.navigate(['/users']);
        }
      },
      'remove group *groupName': (groupName: string) => {
        if (options.router.url === "/users/add") {
          let editingUser = options.userService.editingUser;
          let foundGroup = options.groupService.findByName(groupName);
          editingUser.removeGroup(foundGroup);
        }
      },
    };
  }

  start() {
    annyang.addCommands(this._commands);
    annyang.debug(true);
    annyang.start({paused: false});
    console.log("annyang is listening");
  }
}
