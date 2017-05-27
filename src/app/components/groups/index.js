/**
 * Created by denisziegler on 5/26/17.
 */
System.register(["./group", "./groups"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var group_1, groups_1, GROUPS_COMPONENTS;
    return {
        setters: [
            function (group_1_1) {
                group_1 = group_1_1;
                exports_1({
                    "Group": group_1_1["Group"]
                });
            },
            function (groups_1_1) {
                groups_1 = groups_1_1;
                exports_1({
                    "Groups": groups_1_1["Groups"]
                });
            }
        ],
        execute: function () {/**
             * Created by denisziegler on 5/26/17.
             */
            exports_1("GROUPS_COMPONENTS", GROUPS_COMPONENTS = [
                group_1.Group,
                groups_1.Groups
            ]);
        }
    };
});
//# sourceMappingURL=index.js.map