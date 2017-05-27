/**
 * Created by denisziegler on 5/26/17.
 */
System.register(["@angular/core", "../../services/speech-services"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, speech_services_1, User;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (speech_services_1_1) {
                speech_services_1 = speech_services_1_1;
            }
        ],
        execute: function () {/**
             * Created by denisziegler on 5/26/17.
             */
            User = class User {
            };
            User = __decorate([
                core_1.Component({
                    providers: [speech_services_1.SpeechService],
                    selector: "user",
                    templateUrl: './user.html'
                })
            ], User);
            exports_1("User", User);
        }
    };
});
//# sourceMappingURL=user.js.map