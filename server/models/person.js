// // Step 0 - Get our dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Step 1 - Create the Schema
var personSchema = new Schema({
    "name": String,
    "location": String
});
    // optional
    // {
    //     collection: 'people'
    // }

personSchema.pre('save', function(next) {
  console.log("Hey, I'm saving!");
  next();
});


// Step 2 - Create the model
var Person = mongoose.model('Person', personSchema);

// Step 3 - Export our model so we can use it in other parts of our app
module.exports = Person;

/**
 * Book model for Mongoose
 */

// // Step 0 - Get our dependencies
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
// var Comment = require('./comment').schema;
//
// // Step 1 - Create the Schema
// var bookSchema = new Schema({
//   title: { type: String, required: true },
//   author: String,
//   publishDate: Date,
//   comments: [Comment]
// });
//
// // Step 2 - Create the model
// var Book = mongoose.model('Book', bookSchema);
//
// // Step 3 - Export our model so we can use it in other parts of our app
// module.exports = Book;
