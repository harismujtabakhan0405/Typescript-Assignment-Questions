"use strict";
/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
//Tests for equality and inequality with strings:
//Test1
// let string1 = "Hello";
// let string2 = "hell0";
// let isEqual = string1 === string2; // should be false
// console.log(isEqual);
//Test2
// let string1 = "Apple";
// let string2 = "Banana";
// let isNotEqual = string1 !== string2; // should be true
// console.log(isNotEqual);
// Tests using the lower case function:
// Lowercase test:
// let originalString = "HelloWorld";
// let lowercaseString = originalString.toLowerCase();
// let  isLowercase = lowercaseString === "helloworld"; // should be true
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:
// Equality test with numbers:
const number1 = 5;
const number2 = 5;
const isEqual = number1 === number2; // should be true
// Inequality test with numbers:
const number1 = 10;
const number2 = 7;
const isNotEqual = number1 !== number2; // should be true
// Greater than test:
const number1 = 15;
const number2 = 10;
const isGreaterThan = number1 > number2; // should be true
// Less than test:
const number1 = 5;
const number2 = 8;
const isLessThan = number1 < number2; // should be true
// Greater than or equal to test:
const number1 = 20;
const number2 = 20;
const isGreaterThanOrEqual = number1 >= number2; // should be true
// Less than or equal to test:
const number1 = 12;
const number2 = 15;
const isLessThanOrEqual = number1 <= number2; // should be true
// Tests using "and" and "or" operators:
// "And" operator test:
const condition1 = true;
const condition2 = false;
const result = condition1 && condition2; // should be false
// "Or" operator test:
const condition1 = true;
const condition2 = false;
const result = condition1 || condition2; // should be true
// Test whether an item is in an array:
const myArray = [1, 2, 3, 4, 5];
const itemToCheck = 3;
const isItemInArray = myArray.includes(itemToCheck); // should be true
// Test whether an item is not in an array in TypeScript:
const myArray = [1, 2, 4, 5];
const itemToCheck = 3;
const isItemNotInArray = !myArray.includes(itemToCheck); // should be true
