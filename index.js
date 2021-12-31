// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]; 

beforeEach(function (cats) {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyAppendCat(name) {
    cats.push(name);
}
  
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
    
function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function appendCat(name) {
    const newCats = [
        ...cats.slice(0),
        name,
    ];
    return newCats;
}

function prependCat(name) {
    const newCats = [
        name,
        ...cats.slice(0),
    ];
    return newCats;
}

function removeLastCat() {
    const newCats = [
        ...cats.slice(0, cats.length - 1)
    ];
    return newCats;
}

function removeFirstCat() {
    const newCats = [
        ...cats.slice(1)
    ];
    return newCats;
}