(function (factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    var v = factory(require, exports);
    if (v !== undefined) module.exports = v;
  } else if (typeof define === "function" && define.amd) {
    define(["require", "exports", "./battle"], factory);
  }
})(function (require, exports) {
  "use strict";
  var battle_1 = require("./battle");
  exports.myfighters = battle_1.getFighters();
  exports.winner = battle_1.pickWinner();
  console.log("fighters are: ", battle_1.getFighters());
  console.log("winner is: ", battle_1.pickWinner());
});
