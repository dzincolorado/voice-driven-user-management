/**
 * Created by denisziegler on 5/26/17.
 */

import {Component} from "@angular/core";
import {UserService} from "../../services/user-service";

@Component({
  providers: [],
  selector: "users",
  templateUrl: './users.html'
})

export class Users {
  constructor(public userSvc: UserService){

  }
}
