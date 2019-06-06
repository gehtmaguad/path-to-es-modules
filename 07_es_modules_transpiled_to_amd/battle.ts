export function battle(candidate1, candidate2) {
    return candidate1.length > candidate2.length ?
        candidate1 : candidate2;
}

export function armWrestling(candidate1, candidate2) {
    return candidate1.length < candidate2.length ?
        candidate1 : candidate2;
}
var fighters = ["Johnny", "Beatrice", "Eugene", "Christopher"];

export function getFighters() {
    return fighters;
}