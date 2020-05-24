var BATTLE = require("./battle");

var myfighters = BATTLE.getFighters();
var winner = BATTLE.pickWinner();

console.log("fighters: ", myfighters);
console.log("winner: ", winner);
