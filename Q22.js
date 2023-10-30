"use strict";
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let colors = ["Red", "Green", "Blue"];
let indexWithError = 3;
console.log("Attempting to access an out-of-bounds index...");
console.log("Color at index", indexWithError, "is:", colors[indexWithError]);
if (indexWithError >= 0 && indexWithError < colors.length) {
    console.log("Corrected: Color at index", indexWithError, "is:", colors[indexWithError]);
}
else {
    console.log("Index is out of bounds. Please provide a valid index.");
}
