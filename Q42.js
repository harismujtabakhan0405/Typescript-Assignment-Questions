"use strict";
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
const magicianNames = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
make_great(magicianNames); // Add "the Great" to each magician's name
show_magicians(magicianNames); // Print the updated list of great magicians
