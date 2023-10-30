//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function orderSandwich(...items: string[]): void {
    console.log("You ordered a sandwich with the following items:");
    for (let item of items) {
      console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!\n");
  }
  
  orderSandwich("Chicken", "Cheese", "pi", "Tomato");
  orderSandwich("Turkey", "Bacon", "onion");
  orderSandwich("Peanut Butter", "Jelly");
  