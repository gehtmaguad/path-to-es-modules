define(["require", "exports"], function (require, exports) {
  "use strict";
  var fighters = ["Johnny", "Beatrice", "Nadine", "Christopher"];

  function pickWinner() {
    return fighters[Math.floor(Math.random() * Math.floor(fighters.length))];
  }
  exports.pickWinner = pickWinner;

  function getFighters() {
    return fighters;
  }
  exports.getFighters = getFighters;
});
