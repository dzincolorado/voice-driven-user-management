/**
 * Created by denisziegler on 5/26/17.
 */

import {Component, Input} from "@angular/core";
import {UserService} from "../../services/user-service";

@Component({
  providers: [],
  selector: "users",
  templateUrl: './users.html'
})

export class Users {
  @Input() hideHelpText: boolean;
  constructor(public userSvc: UserService){

  }
}
