"use strict";
/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
// Version 1:
const alienColor = "green";
if (alienColor === "green") {
    console.log("The player earned 5 points.");
}
else if (alienColor === "yellow") {
    console.log("The player earned 10 points.");
}
else if (alienColor === "red") {
    console.log("The player earned 15 points.");
}
// Version 2:
// let alienColor = "yellow";
// if (alienColor === "green") {
//     console.log("The player earned 5 points.");
// } else if (alienColor === "yellow") {
//     console.log("The player earned 10 points.");
// } else if (alienColor === "red") {
//     console.log("The player earned 15 points.");
// };
// // Version 3:
// let alienColor = "red";
// if (alienColor === "green") {
//     console.log("The player earned 5 points.");
// } else if (alienColor === "yellow") {
//     console.log("The player earned 10 points.");
// } else if (alienColor === "red") {
//     console.log("The player earned 15 points.");
// };
