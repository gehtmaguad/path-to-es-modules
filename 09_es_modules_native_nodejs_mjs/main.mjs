import { getFighters, pickWinner } from "./battle.mjs";

const myfighters = getFighters();
const winner = pickWinner();

console.log("fighters are: ", myfighters);
console.log("winner is: ", winner);
