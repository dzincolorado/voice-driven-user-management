/**
 * Created by denisziegler on 5/25/17.
 */

import annyang from 'annyang';
import {Injectable, NgZone} from '@angular/core';
import {Router} from '@angular/router';
import {SpeechOptions} from "../interfaces/speech-options";

import {User} from '../models/user';
import {Group} from '../models/group';

@Injectable()
export class SpeechService {

  private _commands: any;
  private _router: Router;
  private _currentCommand: string;
  //TODO: this really shouldn't be here.  Refactor to an voiceActionStore for pub/subbing updates.
  private zone: NgZone;

  constructor() {

  }

  private userSaid(userSaid: string, commandText: string, phrases: string[] = []) {
    // console.log(userSaid);
    this._currentCommand = userSaid;
    // this.zoneUpdate();
  }

  get currentCommand(): string {
    return this._currentCommand;
  }

  setZone(zone:NgZone){
    this.zone = zone;
  }

  private zoneUpdate(){
    this.zone.run(() => {
      console.log("updating zone");
    })
  }

  private finishUserEdits(options: SpeechOptions) {
    if (options.router.url === "/users/add") {
      if (options.userService.editingUser.groups.length > 0) {
        options.userService.finishEditing();
        this._router.navigate(['/users']);
      }
      else {
        alert("Please add at least one group");
      }
    }
    this.zoneUpdate();
  }

  configureCommands(options: SpeechOptions) {
    this._router = options.router;
    this._commands = {
      'listen up': () => {
        annyang.addCallback('resultMatch', this.userSaid, null);
        alert("I'm here");
      },
      'see users': () => {
        annyang.addCallback('resultMatch', this.userSaid, null);
        this._router.navigate(['/users']);
      },
      'view users': () => {
        annyang.addCallback('resultMatch', this.userSaid, null);
        this._router.navigate(['/users']);
        this.zoneUpdate();
      },
      'see groups': () => {
        annyang.addCallback('resultMatch', this.userSaid, null);
        this._router.navigate(['/groups']);
        this.zoneUpdate();
      },
      'view groups': () => {
        annyang.addCallback('resultMatch', this.userSaid, null);
        this._router.navigate(['/groups']);
        this.zoneUpdate();
      },
      'go home': () => {
        annyang.addCallback('resultMatch', this.userSaid, null);
        this._router.navigate(['/']);
        this.zoneUpdate();
      },
      'add user *userName': (userName: string) => {
        let user = new User(userName);
        options.userService.setEditingUser(user);
        this._router.navigate(['/users/add']);
        this.zoneUpdate();
      },
      'continue edit': () => {
        this._router.navigate(['/users/add']);
        this.zoneUpdate();
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
          this._router.navigate(['/groups']);
        }
        this.zoneUpdate();
      },
      'finish': () => {
        this.finishUserEdits(options);
      },
      'finished': () => {
        this.finishUserEdits(options);
      },
      'remove group *groupName': (groupName: string) => {
        if (options.router.url === "/users/add") {
          let editingUser = options.userService.editingUser;
          let foundGroup = options.groupService.findByName(groupName);
          editingUser.removeGroup(foundGroup);
        }
        else{
          this._router.navigate(['/groups']);
        }
        this.zoneUpdate();
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
