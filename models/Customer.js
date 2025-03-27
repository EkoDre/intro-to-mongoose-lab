
import mongoose from 'mongoose';

// Define the schema (structure)
const customerSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// Make the model
const Customer = mongoose.model('Customer', customerSchema);

// Export it the ES Module way
export default Customer;
