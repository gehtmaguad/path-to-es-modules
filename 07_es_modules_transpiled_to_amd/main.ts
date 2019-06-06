import {
    battle,
    armWrestling,
    getFighters
} from "./battle";

var myfighters = getFighters();
var winnerBattle1 = battle(myfighters[0], myfighters[1]);
var winnerBattle2 = battle(myfighters[2], myfighters[3]);
var winner = armWrestling(winnerBattle1, winnerBattle2);

console.log("winner: ", winner);

// needs to be transpiled, for example with babel transpiler: 'tsc --module commonjs main.ts'