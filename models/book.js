const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  sub: String,
  author: { type: String, required: true },
  synopsis: String,
  img: String,
  link: String,
  notes: [
    {
        body:{type: String, required: true}
    }  
  ],
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
