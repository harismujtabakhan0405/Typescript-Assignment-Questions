/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/





const favorite_fruits: string[] = ["apples", "bananas", "strawberries"];


if (favorite_fruits.includes("apples")) {
  console.log("You really like apples!");
}

if (favorite_fruits.includes("bananas")) {
  console.log("You really like bananas!");
}

if (favorite_fruits.includes("strawberries")) {
  console.log("You really like strawberries!");
}

if (favorite_fruits.includes("oranges")) {
  console.log("You really like oranges!");
} else {
  console.log("Oranges are not one of your favorite fruits.");
}

if (favorite_fruits.includes("grapes")) {
  console.log("You really like grapes!");
} else {
  console.log("Grapes are not one of your favorite fruits.");
}
