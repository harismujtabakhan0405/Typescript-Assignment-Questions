"use strict";
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//FUNCTION 1
// Author: Your Name
// Date: 2023-10-26
// Program to calculate the average of three numbers.
function calculateAverage(num1, num2, num3) {
    // Calculate the sum of three numbers.
    const sum = num1 + num2 + num3;
    // Divide the sum by 3 to get the average.
    const average = sum / 3;
    return average;
}
const num1 = 5;
const num2 = 10;
const num3 = 15;
const result = calculateAverage(num1, num2, num3);
console.log(`The average of ${num1}, ${num2}, and ${num3} is: ${result}`);
// FUNCTION 2
// Author: Your Name
// Date: 2023-10-26
// Program to check if a number is even or odd.
function isEven(num) {
    // Check if the number is divisible by 2.
    if (num % 2 === 0) {
        return true; // It's even.
    }
    else {
        return false; // It's odd.
    }
}
const numberToCheck = 7;
if (isEven(numberToCheck)) {
    console.log(`${numberToCheck} is an even number.`);
}
else {
    console.log(`${numberToCheck} is an odd number.`);
}
