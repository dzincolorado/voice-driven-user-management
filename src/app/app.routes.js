/**
 * Created by denisziegler on 5/26/17.
 */
System.register(["@angular/router", "./components/home/home", "./components/users/users", "./components/users/user", "./components/groups/groups", "./components/groups/group"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_1, users_1, user_1, groups_1, group_1, appRoutes, routing;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
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
        execute: function () {/**
             * Created by denisziegler on 5/26/17.
             */
            appRoutes = [
                { path: '',
                    redirectTo: 'home',
                    pathMatch: 'full'
                },
                {
                    path: 'home',
                    component: home_1.Home
                },
                {
                    path: 'Users/:id',
                    component: user_1.User,
                    data: {}
                },
                {
                    path: 'Users',
                    component: users_1.Users
                },
                {
                    path: 'Groups/:id',
                    component: group_1.Group
                },
                {
                    path: 'Groups',
                    component: groups_1.Groups
                }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    };
});
//# sourceMappingURL=app.routes.js.map