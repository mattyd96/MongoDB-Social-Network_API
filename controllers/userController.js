const { User, Thought } = require('../models');

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
    User.findOneAndUpdate({"_id": req.params.userId}, {...req.body}, { new:true })
    .then(user => res.json(user))
    .catch((err) => res.status(500).json(err));
  },

  // delete a user by id
  deleteUser: (req, res) => {
    User.findOneAndDelete({_id: req.params.userId})
    .then(user => {
      return Thought.deleteMany({ username: user.username})
    })
    .then(deleted => {
      deleted.deletedCount <= 0
        ? res.json(`deleted user and ${deleted.deletedCount} thoughts`)
        : res.json('error when deleting user thoughts');
    })
    .catch((err) => res.status(500).json(err));
  }
}