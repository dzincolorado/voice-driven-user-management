/**
 * Created by denisziegler on 5/25/17.
 */
System.register(["annyang", "@angular/core", "../models/user", "../models/group"], function (exports_1, context_1) {
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
    var annyang_1, core_1, user_1, group_1, SpeechService;
    return {
        setters: [
            function (annyang_1_1) {
                annyang_1 = annyang_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (group_1_1) {
                group_1 = group_1_1;
            }
        ],
        execute: function () {/**
             * Created by denisziegler on 5/25/17.
             */
            SpeechService = class SpeechService {
                constructor() {
                }
                userSaid(userSaid, commandText, phrases = []) {
                    // console.log(userSaid);
                    this._currentCommand = userSaid;
                    this.zone.run(() => {
                        //running zone update
                    });
                }
                get currentCommand() {
                    return this._currentCommand;
                }
                configureCommands(options) {
                    this._router = options.router;
                    this._commands = {
                        'listen up': () => {
                            annyang_1.default.addCallback('resultMatch', this.userSaid, null);
                        },
                        'see users': () => {
                            annyang_1.default.addCallback('resultMatch', this.userSaid, null);
                            this._router.navigate(['/users']);
                        },
                        'view users': () => {
                            annyang_1.default.addCallback('resultMatch', this.userSaid, null);
                            this._router.navigate(['/users']);
                        },
                        'see groups': () => {
                            annyang_1.default.addCallback('resultMatch', this.userSaid, null);
                            this._router.navigate(['/groups']);
                        },
                        'view groups': () => {
                            annyang_1.default.addCallback('resultMatch', this.userSaid, null);
                            this._router.navigate(['/groups']);
                        },
                        'go home': () => {
                            annyang_1.default.addCallback('resultMatch', this.userSaid, null);
                            this._router.navigate(['/']);
                        },
                        'add user *userName': (userName) => {
                            let user = new user_1.User(userName);
                            options.userService.setEditingUser(user);
                            this._router.navigate(['/users/add']);
                        },
                        'add group *groupName': (groupName) => {
                            if (options.router.url === "/users/add") {
                                let editingUser = options.userService.editingUser;
                                let foundGroup = options.groupService.findByName(groupName);
                                if (foundGroup) {
                                    editingUser.addGroup(foundGroup);
                                }
                            }
                            else {
                                let group = new group_1.Group(groupName);
                                options.groupService.add(group);
                            }
                        },
                        'finish': (groupName) => {
                            if (options.router.url === "/users/add") {
                                options.userService.finishEditing();
                                this._router.navigate(['/users']);
                            }
                        },
                        'finished': (groupName) => {
                            if (options.router.url === "/users/add") {
                                options.userService.finishEditing();
                                this._router.navigate(['/users']);
                            }
                        },
                        'remove group *groupName': (groupName) => {
                            if (options.router.url === "/users/add") {
                                let editingUser = options.userService.editingUser;
                                let foundGroup = options.groupService.findByName(groupName);
                                editingUser.removeGroup(foundGroup);
                            }
                        },
                    };
                }
                start(zone) {
                    this.zone = zone;
                    annyang_1.default.addCommands(this._commands);
                    annyang_1.default.debug(true);
                    annyang_1.default.start({ paused: false });
                    console.log("annyang is listening");
                }
            };
            SpeechService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [])
            ], SpeechService);
            exports_1("SpeechService", SpeechService);
        }
    };
});
//# sourceMappingURL=speech-services.js.map