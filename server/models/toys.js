 
 const mongoose= require('mongoose');

 // creer schema
  const toysSchema = new mongoose.Schema({
    //id: Number,
    name: String,
    category_id: Number,
    description: String,
    price: Number
   });
  
    //mongosse model
    module.exports = mongoose.model('Toy', toysSchema)
