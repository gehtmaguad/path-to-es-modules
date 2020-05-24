(function (factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    var v = factory(require, exports);
    if (v !== undefined) module.exports = v;
  } else if (typeof define === "function" && define.amd) {
    define(["require", "exports"], factory);
  }
})(function (require, exports) {
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
