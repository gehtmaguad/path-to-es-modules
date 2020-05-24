var fighters = ["Johnny", "Beatrice", "Nadine", "Christopher"];

function getFighters() {
  return fighters;
}

function pickWinner() {
  return fighters[Math.floor(Math.random() * Math.floor(fighters.length))];
}
