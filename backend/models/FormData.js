const mongoose = require("mongoose");

const FormDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  totalCost: Number,
});

const FormDataModel = mongoose.model("user", FormDataSchema);

module.exports = FormDataModel;
