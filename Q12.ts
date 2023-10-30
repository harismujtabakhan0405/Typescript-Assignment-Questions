//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.


let namess: string[] = ["haris", "khan", "hariq", "lala"];


for (let name of namess) {
    let greeting = `Hello, ${name}! Have a great day.`;
    console.log(greeting);
}
