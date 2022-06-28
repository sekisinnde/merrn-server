const mongoose= require('mongoose');
 
// creer schema
 const categorySchema = new mongoose.Schema({
   //id: Number,
   name: String
  });
 
   //mongosse model
   module.exports = mongoose.model('Category', categorySchema)