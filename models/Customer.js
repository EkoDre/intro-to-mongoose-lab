const mongoose = require('mongoose');

// Define the schema (structure)
const customerSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// Make the model
const Customer = mongoose.model('Customer', customerSchema);

// Export it so can use it elsewhere
module.exports = Customer;
