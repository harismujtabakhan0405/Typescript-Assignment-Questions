/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/



let dinnerGuests: string[] =["Haris", "Khan", "lala"];


let guestWhoCantMakeIt = "Haris";


console.log(`Unfortunately, ${guestWhoCantMakeIt} can't make it to the dinner.`);


let newGuest = "Hariq";
let indexOfCanceledGuest = dinnerGuests.indexOf(guestWhoCantMakeIt);

if (indexOfCanceledGuest !== -1) {
    dinnerGuests[indexOfCanceledGuest] = newGuest;
}


console.log("Great news! We've found a bigger dinner table!");


dinnerGuests.unshift("Naeem");  // Add to the beginning
dinnerGuests.splice(2, 0, "Aamir");  // Add to the middle
dinnerGuests.push("Haris Replacement");  // Add to the end


dinnerGuests.forEach((guest) => {
    console.log(`Dear ${guest},\nYou are cordially invited to a dinner at my place. Please join us for an evening of great conversation and delicious food.\n\nSincerely, [Your Name]`);
});
