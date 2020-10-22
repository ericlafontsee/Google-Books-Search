const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googleSchema = new Schema({
  title: {
    type: String,
    required: true
  },

  authors: {
      type: [String]
  },

  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  apiId: {
      type: String,
      required: true,
      unique: true
  }
});

const Books = mongoose.model("Books", googleSchema);
module.exports = Books;