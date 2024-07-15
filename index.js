// Initialize an array named cats with initial values ["Milo", "Otis", "Garfield"]
var cats = ["Milo", "Otis", "Garfield"];

// Export cats array if in a module (not explicitly required by tasks, but useful for testing)
module.exports = {
    cats
};
// Initialize an array named cats with initial values ["Milo", "Otis", "Garfield"]
var cats = ["Milo", "Otis", "Garfield"];

// Function to destructively append a cat to the end of the cats array
function destructivelyAppendCat(name) {
    cats.push(name);
}

// Function to destructively prepend a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// Function to destructively remove the last cat from the cats array
function destructivelyRemoveLastCat() {
    cats.pop();
}

// Function to destructively remove the first cat from the cats array
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Function to append a cat to the cats array and return a new array, leaving the cats array unchanged
function appendCat(name) {
    return cats.concat(name);
}

// Function to prepend a cat to the cats array and return a new array, leaving the cats array unchanged
function prependCat(name) {
    return [name, ...cats];
}

// Function to remove the last cat in the cats array and return a new array, leaving the cats array unchanged
function removeLastCat() {
    return cats.slice(0, -1);
}

// Function to remove the first cat from the cats array and return a new array, leaving the cats array unchanged
function removeFirstCat() {
    return cats.slice(1);
}


