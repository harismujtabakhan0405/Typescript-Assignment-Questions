"use strict";
// Store the person's name in a variable
let personName2 = "John Doe";
// Print the name in lowercase
console.log(personName2.toLowerCase());
// Print the name in uppercase
console.log(personName2.toUpperCase());
// Print the name in titlecase
function toTitleCase(input) {
    return input
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
let finalText = toTitleCase("my name is haris mujtaba khan");
console.log(finalText);
