/**
 * Created by denisziegler on 5/27/17.
 */

import {Router} from '@angular/router';
import {UserService} from "../services/user-service";
import {GroupService} from "../services/group-service";

export interface SpeechOptions {
    router: Router;
    userService: UserService;
    groupService: GroupService;
}