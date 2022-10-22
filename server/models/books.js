/*
File name: books.js
Creator: Aditya Chouhan
Student ID: 301215583
Date : 16 October; 2022
*/

let mongoose = require("mongoose");

// create a model class
let Book = mongoose.Schema(
  {
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String,
  },
  {
    collection: "books",
  }
);

module.exports = mongoose.model("Book", Book);
