System.register(["@angular/core", "@angular/http", "@angular/forms", "@angular/platform-browser", "./app.routes", "./components/home/home", "./components/users/users", "./components/users/user", "./components/groups/groups", "./components/groups/group"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1, forms_1, platform_browser_1, app_routes_1, home_1, users_1, user_1, groups_1, group_1, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (users_1_1) {
                users_1 = users_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (groups_1_1) {
                groups_1 = groups_1_1;
            },
            function (group_1_1) {
                group_1 = group_1_1;
            }
        ],
        execute: function () {
            AppModule = class AppModule {
            };
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [/*BrowserAnimationsModule, */ platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, forms_1.ReactiveFormsModule, app_routes_1.routing],
                    entryComponents: [home_1.Home, groups_1.Groups, users_1.Users],
                    declarations: [home_1.Home, group_1.Group, groups_1.Groups, user_1.User, users_1.Users],
                    bootstrap: [home_1.Home]
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=app.module.js.map