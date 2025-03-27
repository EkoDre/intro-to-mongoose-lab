import dotenv from 'dotenv';
dotenv.config(); // ✅ Load .env variables

import mongoose from 'mongoose';
import promptSync from 'prompt-sync'; // Import it first
const prompt = promptSync(); // Then use it

import Customer from './models/Customer.js';



// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
 
})
.then(() => {
  console.log("Connected to MongoDB");
  showMenu(); // Start the app once connected
})
.catch((error) => {
  console.log("Failed to connect to MongoDB", error);
});

// This function shows the menu and handles the user's choice
async function showMenu() {
  console.log("\nWelcome to the CRM");
  console.log("\nWhat would you like to do?\n");
  console.log("  1. Create a customer");
  console.log("  2. View all customers");
  console.log("  3. Update a customer");
  console.log("  4. Delete a customer");
  console.log("  5. Quit\n");

  const choice = prompt("Number of action to run: ");

  if (choice === '1') {
    await createCustomer();
  } else if (choice === '2') {
    await viewCustomers();
  } else if (choice === '3') {
    await updateCustomer();
  } else if (choice === '4') {
    await deleteCustomer();
  } else if (choice === '5') {
    console.log("Goodbye");
    mongoose.disconnect();
    return;
  } else {
    console.log("Invalid choice. Please try again.");
  }

  // Show the menu again after completing the action
  showMenu();
}

// This function lets the user create a new customer
async function createCustomer() {
  const name = prompt("Enter customer's name: ");
  const age = prompt("Enter customer's age: ");
  await Customer.create({ name, age });
  console.log("Customer created");
}

// This function shows all customers in the database
async function viewCustomers() {
  const customers = await Customer.find();
  console.log("\nCustomer List:\n");
  customers.forEach((c) => {
    console.log(`id: ${c._id} -- Name: ${c.name}, Age: ${c.age}`);
  });
}

// This function lets the user update a customer's name and age
async function updateCustomer() {
  await viewCustomers(); // Show customers first
  const id = prompt("\nEnter the ID of the customer to update: ");
  const name = prompt("Enter the customer's new name: ");
  const age = prompt("Enter the customer's new age: ");
  await Customer.findByIdAndUpdate(id, { name, age });
  console.log("Customer updated");
}

// This function lets the user delete a customer
async function deleteCustomer() {
  await viewCustomers(); // Show customers first
  const id = prompt("\nEnter the ID of the customer to delete: ");
  await Customer.findByIdAndDelete(id);
  console.log("Customer deleted");
}
