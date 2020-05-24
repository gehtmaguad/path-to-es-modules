import BATTLE from "./battle.js";

const myfighters = BATTLE.getFighters();
const winner = BATTLE.pickWinner();

console.log("fighters are: ", myfighters);
console.log("winner is: ", winner);
