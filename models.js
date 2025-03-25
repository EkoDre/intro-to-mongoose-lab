// models/customers.js
import mongoose from 'mongoose';

// Schema for the customer model
const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // This means the name is required
  },
  age: {
    type: Number,
    required: true, // This means the age is required
  },
});

// Create the Customer model based on the schema
const Customer = mongoose.model('Customer', customerSchema);

// Export the Customer model so you can use it in other parts of the application
export default Customer;
