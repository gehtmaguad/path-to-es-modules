var BATTLE = require("./battle");

var myfighters = BATTLE.getFighters();
var winner = BATTLE.pickWinner();

window.myfighters = myfighters;
window.winner = winner;
