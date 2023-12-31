'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ItemSchema = new Schema({
  name: {
    type: String,
    required: 'Enter item name'
  },
  id: {
    type: String,
    required: 'Enter item id'
  },
  imgSource: {
    type: String,
    required: 'Enter item image URL'
  },
  price: {
    type: Number,
    required: 'Enter item price'
  },
  raised: {
    type: Number,
    default: 0
  },
  url: {
    type: String,
  },
});
module.exports = mongoose.model('Items', ItemSchema);