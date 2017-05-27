System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User;
    return {
        setters: [],
        execute: function () {
            /**
             * Created by denisziegler on 5/25/17.
             */
            User = class User {
                constructor(name) {
                    this.groups = [];
                    this.name = name;
                }
                addGroup(group) {
                    this.groups.push(group);
                }
                removeGroup(group) {
                    let idx = this.groups.findIndex((testGroup) => {
                        return testGroup.id == group.id;
                    });
                    if (idx >= 0) {
                        this.groups.splice(idx, 1);
                    }
                }
                get stringifiedGroups() {
                    return this.groups.map((group) => {
                        return group.name;
                    }).join(", ");
                }
            };
            exports_1("User", User);
        }
    };
});
//# sourceMappingURL=user.js.map