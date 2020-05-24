var BATTLE = {};

(function () {
  var fighters = ["Johnny", "Beatrice", "Nadine", "Christopher"];

  function pickWinner() {
    return fighters[Math.floor(Math.random() * Math.floor(fighters.length))];
  }

  function getFighters() {
    return fighters;
  }

  BATTLE.pickWinner = pickWinner;
  BATTLE.getFighters = getFighters;
})();
