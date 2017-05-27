/**
 * Created by denisziegler on 5/25/17.
 */
System.register(["annyang"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var annyang_1, SpeechService;
    return {
        setters: [
            function (annyang_1_1) {
                annyang_1 = annyang_1_1;
            }
        ],
        execute: function () {/**
             * Created by denisziegler on 5/25/17.
             */
            SpeechService = class SpeechService {
                constructor() {
                    this._commands = {};
                }
                start() {
                    annyang_1.default.addCommands(this._commands);
                    annyang_1.default.debug(true);
                    annyang_1.default.start();
                }
            };
            exports_1("SpeechService", SpeechService);
        }
    };
});
//# sourceMappingURL=speech-services.js.map