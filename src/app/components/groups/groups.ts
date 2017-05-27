/**
 * Created by denisziegler on 5/26/17.
 */

import {
    Component
} from "@angular/core";
import {Router} from "@angular/router";
import {GroupService} from "../../services/group-service";

@Component({
  providers: [],
  selector: "groups",
  templateUrl: './groups.html'
})

export class Groups {
  constructor(public groupSvc: GroupService){}
}
