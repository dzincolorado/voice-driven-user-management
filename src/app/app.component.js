/**
 * Created by denisziegler on 5/26/17.
 */
System.register(["@angular/core", "@angular/router", "./services/speech-services", "./services/user-service", "./services/group-service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, speech_services_1, user_service_1, group_service_1, App;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (speech_services_1_1) {
                speech_services_1 = speech_services_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (group_service_1_1) {
                group_service_1 = group_service_1_1;
            }
        ],
        execute: function () {/**
             * Created by denisziegler on 5/26/17.
             */
            App = class App {
                constructor(router, userSvc, groupSvc, zone) {
                    this.router = router;
                    this.userSvc = userSvc;
                    this.groupSvc = groupSvc;
                    this.zone = zone;
                    this.speechSvc = new speech_services_1.SpeechService();
                    this.speechSvc.setZone(zone);
                    this.speechSvc.configureCommands({ router: router, userService: userSvc, groupService: groupSvc });
                    this.speechSvc.start();
                }
                get currentCommand() {
                    return this.speechSvc.currentCommand;
                }
                ngOnInit() {
                }
            };
            App = __decorate([
                core_1.Component({
                    providers: [speech_services_1.SpeechService],
                    selector: "voice-app",
                    templateUrl: './app.component.html'
                }),
                __metadata("design:paramtypes", [router_1.Router,
                    user_service_1.UserService,
                    group_service_1.GroupService,
                    core_1.NgZone])
            ], App);
            exports_1("App", App);
        }
    };
});
//# sourceMappingURL=app.component.js.map