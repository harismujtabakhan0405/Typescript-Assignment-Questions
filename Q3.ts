//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.



// Store the person's name in a variable
let personName2: string = "John Doe";

// Print the name in lowercase
console.log(personName2.toLowerCase());

// Print the name in uppercase
console.log(personName2.toUpperCase());

// Print the name in titlecase
function toTitleCase (input:string):string {
  return input
  .toLowerCase()
  .split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');
}
let finalText = toTitleCase("my name is haris mujtaba khan");
console.log(finalText);

