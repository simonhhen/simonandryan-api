'use strict';
module.exports = (app) => {
  const contributions = require('../controllers/contribution');
  app.route('/contributions')
    .get(contributions.list_all_contributions)
    .post(contributions.create_a_contribution)
    .delete(contributions.delete_all_contributions)
  app.route('/contributions/:contributionId')
    .get(contributions.read_a_contribution)
    .put(contributions.update_a_contribution)
    .delete(contributions.delete_a_contribution)
};