/**
 * Created by denisziegler on 5/26/17.
 */

import { Component, OnInit, NgZone} from "@angular/core";
import {Router} from "@angular/router";

import {SpeechService} from "./services/speech-services";
import {UserService} from "./services/user-service";
import {GroupService} from "./services/group-service";

@Component({
  providers: [SpeechService],
  selector: "voice-app",
  templateUrl: './app.component.html'
})

export class App implements OnInit {
  private speechSvc: SpeechService;
  constructor(
      private router:Router,
      private userSvc: UserService,
      private groupSvc: GroupService,
      private zone: NgZone
  ){

    this.speechSvc = new SpeechService();
    this.speechSvc.setZone(zone);
    this.speechSvc.configureCommands({router: router, userService: userSvc, groupService: groupSvc});
    this.speechSvc.start();
  }

  get currentCommand(): string {
    return this.speechSvc.currentCommand;
  }

  ngOnInit() {

  }
}
