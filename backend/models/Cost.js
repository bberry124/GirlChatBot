const mongoose = require("mongoose");

const CostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  min: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

const CostModel = mongoose.model("Cost", CostSchema);

module.exports = CostModel;
