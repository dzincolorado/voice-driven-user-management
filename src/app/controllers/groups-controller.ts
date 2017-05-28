/**
 * Created by denisziegler on 5/27/17.
 */
import {Injectable} from "@angular/core";
import {UserService} from "../services/user-service";
import {GroupService} from "../services/group-service";
import {Group} from "../models/group";
import {User} from "../models/user";

@Injectable()
export class GroupsController {
    constructor(private userSvc: UserService, private groupSvc: GroupService) {
    }

    getUsers(group: Group): User[] {
        let matchingUsers = this.userSvc.list.filter((user: User) => {
            return user.groups.findIndex((testGroup: Group) => {
                    return testGroup.id === group.id;
                }) >= 0;
        });

        return matchingUsers;
    }

    getStringifiedUsers(group: Group): string {
        return this.getUsers(group).map((user: User) => {
            return user.name;
        }).join(", ");
    }
}