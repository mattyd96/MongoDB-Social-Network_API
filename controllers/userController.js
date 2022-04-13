const { User } = require('../models');

module.exports = {
  // get all users
  getUsers: (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch((err) => res.status(500).json(err));
  },

  // get a user by id
  getSingleUser: (req, res) => {
    User.findOne({"_id": req.params.userId})
    .select('-__v')
    .populate('thoughts')
    .populate('friends')
    .then(user => res.json(user))
    .catch((err) => res.status(500).json(err));
  },

  // create a user
  createUser: (req, res) => {
    User.create(req.body)
    .then(user => res.json(user))
    .catch((err) => res.status(500).json(err));
  },

  // update a user by id
  updateUser: (req, res) => {
    User.updateOne({"_id": req.params.userId}, {...req.body})
    .then(user => res.json(user))
    .catch((err) => res.status(500).json(err));
  },

  // delete a user by id
  // TODO delete all associated comments
  deleteUser: (req, res) => {
    User.deleteOne({"_id": req.params.userId})
    .then(user => res.json(user))
    .catch((err) => res.status(500).json(err));
  }
}