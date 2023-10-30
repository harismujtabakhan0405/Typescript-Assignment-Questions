/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/



// Step 1: Create a list of current_users
let current_users: string[] = ["John", "Alice", "Bob", "Eve", "Mallory"];

// Step 2: Create a list of new_users
let new_users: string[] = ["Alice", "Eve", "Charlie", "Dave", "Frank"];

// Step 3: Loop through new_users and check for uniqueness (case-insensitive)
for (let new_user of new_users) {
  let isUnique = !current_users.some(
    (current_user) => current_user.toLowerCase() === new_user.toLowerCase()
  );
 
  if (isUnique) {
    console.log(`Username '${new_user}' is available.`);
  } else {
    console.log(`Username '${new_user}' is already in use. Please choose a different username.`);
  }
}
