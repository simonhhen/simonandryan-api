'use strict';
module.exports = (app) => {
  const itemList = require('../controllers/item');
  app.route('/items')
    .get(itemList.list_all_items)
    .post(itemList.create_a_item)
  app.route('/items/:itemId')
    .get(itemList.read_a_item)
    .put(itemList.update_a_item)
};