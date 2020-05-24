async function main() {
  const { pickWinner, getFighters } = await import("./battle.mjs");

  const myfighters = getFighters();
  const winner = pickWinner();

  console.log("fighters are: ", myfighters);
  console.log("winner is: ", winner);
}
main();
