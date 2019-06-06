import BATTLE from "./battle.js";

var myfighters = BATTLE.getFighters();
var winnerBattle1 = BATTLE.battle(myfighters[0], myfighters[1]);
var winnerBattle2 = BATTLE.battle(myfighters[2], myfighters[3]);
var winner = BATTLE.armWrestling(winnerBattle1, winnerBattle2);

console.log("winner: ", winner);

// execute with 'nodejs --experimental-modules main.mjs'