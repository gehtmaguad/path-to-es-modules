define(["require", "exports", "./battle"], function (require, exports, battle_1) {
    "use strict";
    exports.__esModule = true;
    var myfighters = battle_1.getFighters();
    var winnerBattle1 = battle_1.battle(myfighters[0], myfighters[1]);
    var winnerBattle2 = battle_1.battle(myfighters[2], myfighters[3]);
    var winner = battle_1.armWrestling(winnerBattle1, winnerBattle2);
    console.log("winner: ", winner);
});
// needs to be transpiled, for example with babel transpiler: 'tsc --module commonjs main.ts'
