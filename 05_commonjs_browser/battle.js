var fighters = ["Johnny", "Beatrice", "Nadine", "Christopher"];

function pickWinner() {
  return fighters[Math.floor(Math.random() * Math.floor(fighters.length))];
}

function getFighters() {
  return fighters;
}

module.exports = {
  pickWinner: pickWinner,
  getFighters: getFighters,
};
