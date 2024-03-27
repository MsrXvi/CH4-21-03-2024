const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    nama: {
      type: String,
      require: [true, "name cannot be empty"]
    },
    email: {
      type: String,
      unique: true,
    },
    phonenumber: {
      type: String,
      require: true,
    },
    City: String,
    Country: {
      type: String,
      require: true,
      default: "Indonesia",
    },
  });

  const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;