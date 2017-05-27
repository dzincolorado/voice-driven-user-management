/**
 * Created by denisziegler on 5/26/17.
 */

import {
    Component
} from "@angular/core";
import {Router} from "@angular/router";
import {UserService} from "../../services/user-service";
@Component({
  providers: [],
  selector: "user",
  templateUrl: './user.html'
})

export class User {
  constructor(public userSvc: UserService){

  }
}
