const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  itemId: { type: String, required: true },
  item: { type: String, required: true },
  unitPrice: { type: Number, required: true },
  link: {type: String, required: true},
  thumbnail: {type: String },
  description: String,
  customerRating: String,  
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
