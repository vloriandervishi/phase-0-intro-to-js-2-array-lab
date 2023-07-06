// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    return cats.pop();
}
function destructivelyRemoveFirstCat() {
    return cats.shift();
}
function appendCat(name) {
    const fursBall = [...cats, name]
    return fursBall;
}
function prependCat(name) {
    const fursball = [name, ...cats]
    return fursball;
}

function removeLastCat() {
    const fursBall = [...cats];
    fursBall.pop();
    return fursBall
}
function removeFirstCat() {
    const fursBall = [...cats];
    fursBall.shift();
    return fursBall;
}