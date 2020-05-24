define(["require", "exports", "./battle"], function (
  require,
  exports,
  battle_1
) {
  "use strict";
  exports.myfighters = battle_1.getFighters();
  exports.winner = battle_1.pickWinner();
});
