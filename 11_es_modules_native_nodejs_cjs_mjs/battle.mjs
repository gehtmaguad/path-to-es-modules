var fighters = ["Johnny", "Beatrice", "Nadine", "Christopher"];

export function pickWinner() {
  return fighters[Math.floor(Math.random() * Math.floor(fighters.length))];
}

export function getFighters() {
  return fighters;
}
