// Step 1: Load prompt-sync
const prompt = require('prompt-sync')();

// Step 2: Show welcome message
console.log("\nWelcome to the CRM\n");

// Step 3: Show options
console.log("What would you like to do?\n");
console.log("  1. Create a customer");
console.log("  2. View all customers");
console.log("  3. Update a customer");
console.log("  4. Delete a customer");
console.log("  5. Quit\n");

// Step 4: Ask the user what they want to do
const choice = prompt("Number of action to run: ");

// Step 5: Handle their choice (for now just print what they picked)
if (choice === '1') {
  console.log("You chose to CREATE a customer");
} else if (choice === '2') {
  console.log("You chose to VIEW all customers");
} else if (choice === '3') {
  console.log("You chose to UPDATE a customer");
} else if (choice === '4') {
  console.log("You chose to DELETE a customer");
} else if (choice === '5') {
  console.log("Goodbye!");
} else {
  console.log(" Invalid choice. Please run the program again.");
}
