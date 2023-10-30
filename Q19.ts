//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.


let guestList: string[] = ["Haris", "Hamzah", "Khan", "Hariq"];

console.log("Sorry, I can only invite two people for dinner.");
console.log(`Number of people invited: ${guestList.length}`);

while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    if (removedGuest) {
        console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
    }
}

for (const remainingGuest of guestList) {
    console.log(`You're still invited, ${remainingGuest}!`);
}

guestList.length = 0; // Empty the list
console.log("The guest list is now empty.");
