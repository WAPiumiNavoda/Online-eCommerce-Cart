const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
     itemName: {
        type: String,
        required: true
     },

     price: {
        type: String,
        required: true
     },
 
     description: {
        type: String,
        required: true
     },
     countInStock:{
      type: Number,
      required: true   
    },
     imageUrl:{
        type:String,
        require :true
     },
     size:{
      type:String,
      require :true
     }
})

const Item = mongoose.model("Item" , ItemSchema);

module.exports = Item;