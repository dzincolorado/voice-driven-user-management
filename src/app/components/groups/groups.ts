/**
 * Created by denisziegler on 5/26/17.
 */

import {Component} from "@angular/core";
import {GroupService} from "../../services/group-service";
import {GroupsController} from "../../controllers/groups-controller";

@Component({
  providers: [],
  selector: "groups",
  templateUrl: './groups.html'
})

export class Groups {
  constructor(public groupSvc: GroupService, public groupsCtrl: GroupsController){}
}
