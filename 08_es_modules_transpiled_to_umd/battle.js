(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    function battle(candidate1, candidate2) {
        return candidate1.length > candidate2.length ?
            candidate1 : candidate2;
    }
    exports.battle = battle;
    function armWrestling(candidate1, candidate2) {
        return candidate1.length < candidate2.length ?
            candidate1 : candidate2;
    }
    exports.armWrestling = armWrestling;
    var fighters = ["Johnny", "Beatrice", "Eugene", "Christopher"];
    function getFighters() {
        return fighters;
    }
    exports.getFighters = getFighters;
});
