/**
 * Created by denisziegler on 5/26/17.
 */
System.register(["./home"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var home_1, HOME_COMPONENTS;
    return {
        setters: [
            function (home_1_1) {
                home_1 = home_1_1;
                exports_1({
                    "Home": home_1_1["Home"]
                });
            }
        ],
        execute: function () {/**
             * Created by denisziegler on 5/26/17.
             */
            exports_1("HOME_COMPONENTS", HOME_COMPONENTS = [
                home_1.Home
            ]);
        }
    };
});
//# sourceMappingURL=index.js.map