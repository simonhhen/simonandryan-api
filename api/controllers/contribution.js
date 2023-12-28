'use strict';
const mongoose = require('mongoose'),
  Contribution = mongoose.model('Contributions');
exports.list_all_contributions = (req, res) => {
  Contribution.find({}, (err, contribution) => {
    if (err)
      res.send(err);
    res.json(contribution);
  });
};
exports.create_a_contribution = (req, res) => {
  let new_contribution = new Contribution(req.body);
  console.log(req.body);
  new_contribution.save((err, contribution) => {
    if (err)
      res.send(err);
    res.json(contribution);
  });
};
exports.read_a_contribution = (req, res) => {
  Contribution.findById(req.params.contributionId, (err, contribution) => {
    if (err)
      res.send(err);
    res.json(contribution);
  });
};
exports.update_a_contribution = (req, res) => {
 Contribution.findOneAndUpdate({_id: req.params.contributionId}, req.body, {new: true}, (err, task) => {
    if (err)
      res.send(err);
    res.json(contribution);
  });
};
exports.delete_a_contribution = (req, res) => {
  Contribution.remove({
    _id: req.params.contributionId
  }, (err, contribution) => {
    if (err)
      res.send(err);
    res.json({ message: 'Contribution successfully deleted' });
  });
};
exports.delete_all_contributions = (req, res) => {
  Contribution.remove({}, (err, contribution) => {
    if (err)
      res.send(err);
    res.json({ message: 'Contribution successfully deleted' });
  });
};