/**
 * Created by denisziegler on 5/26/17.
 */

import {
    Component,
    ViewChild
} from "@angular/core";
import {Router} from "@angular/router";

import {SpeechService} from "../../services/speech-services";

@Component({
  providers: [SpeechService],
  selector: "groups",
  templateUrl: './groups.html'
})

export class Groups {

}