/**
 * Created by denisziegler on 5/26/17.
 */
System.register(["@angular/core", "../../services/group-service", "../../controllers/groups-controller"], function (exports_1, context_1) {
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
    var core_1, group_service_1, groups_controller_1, Groups;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (group_service_1_1) {
                group_service_1 = group_service_1_1;
            },
            function (groups_controller_1_1) {
                groups_controller_1 = groups_controller_1_1;
            }
        ],
        execute: function () {/**
             * Created by denisziegler on 5/26/17.
             */
            Groups = class Groups {
                constructor(groupSvc, groupsCtrl) {
                    this.groupSvc = groupSvc;
                    this.groupsCtrl = groupsCtrl;
                }
            };
            Groups = __decorate([
                core_1.Component({
                    providers: [],
                    selector: "groups",
                    templateUrl: './groups.html'
                }),
                __metadata("design:paramtypes", [group_service_1.GroupService, groups_controller_1.GroupsController])
            ], Groups);
            exports_1("Groups", Groups);
        }
    };
});
//# sourceMappingURL=groups.js.map