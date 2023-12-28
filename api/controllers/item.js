'use strict';
const mongoose = require('mongoose'),
  Item = mongoose.model('Items');
exports.list_all_items = (req, res) => {
  Item.find({}, (err, item) => {
    if (err)
      res.send(err);
    res.json(item);
  });
};
exports.create_a_item = (req, res) => {
  let new_item = new Item(req.body);
  console.log(new_item);
  console.log(req.body);
  new_item.save((err, item) => {
    if (err)
      res.send(err);
    res.json(item);
  });
};
exports.read_a_item = (req, res) => {
  Item.findById(req.params.itemId, (err, item) => {
    if (err)
      res.send(err);
    res.json(item);
  });
};
exports.update_a_item = (req, res) => {
 Item.findOneAndUpdate({_id: req.params.itemId}, req.body, {new: true}, (err, task) => {
    console.log(task);
    if (err)
      res.send(err);
    res.json(task);
  });
};
exports.delete_a_item = (req, res) => {
  Item.remove({
    _id: req.params.itemId
  }, (err, item) => {
    if (err)
      res.send(err);
    res.json({ message: 'Item successfully deleted' });
  });
};
exports.delete_all_items = (req, res) => {
  Item.remove({}, (err, item) => {
    if (err)
      res.send(err);
    res.json({ message: 'Item successfully deleted' });
  });
};