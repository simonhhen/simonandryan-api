'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ContributionSchema = new Schema({
  name: {
    type: String,
    required: 'Enter contribution name'
  },
  id: {
    type: String,
    required: 'Enter contribution item id'
  },
  amount: {
    type: Number,
    required: 'Enter contribution amount'
  },
});
module.exports = mongoose.model('Contributions', ContributionSchema);