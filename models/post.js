// Load required packages
var mongoose = require("mongoose");

// Define our teams schema
var PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  date: String,
  comments: Number
});

// Export the Mongoose model
module.exports = mongoose.model("Post", PostSchema);
