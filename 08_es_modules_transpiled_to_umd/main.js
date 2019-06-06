(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./battle"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var battle_1 = require("./battle");
    var myfighters = battle_1.getFighters();
    var winnerBattle1 = battle_1.battle(myfighters[0], myfighters[1]);
    var winnerBattle2 = battle_1.battle(myfighters[2], myfighters[3]);
    var winner = battle_1.armWrestling(winnerBattle1, winnerBattle2);
    console.log("winner: ", winner);
});
// needs to be transpiled, for example with babel transpiler: 'tsc --module umd main.ts'
