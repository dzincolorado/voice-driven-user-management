/**
 * Created by denisziegler on 5/26/17.
 */
System.register(["./user", "./users"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var user_1, users_1, USER_COMPONENTS;
    return {
        setters: [
            function (user_1_1) {
                user_1 = user_1_1;
                exports_1({
                    "User": user_1_1["User"]
                });
            },
            function (users_1_1) {
                users_1 = users_1_1;
                exports_1({
                    "Users": users_1_1["Users"]
                });
            }
        ],
        execute: function () {/**
             * Created by denisziegler on 5/26/17.
             */
            exports_1("USER_COMPONENTS", USER_COMPONENTS = [
                user_1.User,
                users_1.Users
            ]);
        }
    };
});
//# sourceMappingURL=index.js.map