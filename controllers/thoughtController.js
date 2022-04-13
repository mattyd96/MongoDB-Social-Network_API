const { Thought, User } = require("../models")

module.exports = {
  // get all thoughts
  getThoughts: (req, res) => {
    Thought.find()
    .then(thoughts => res.json(thoughts))
    .catch((err) => res.status(500).json(err));
  },

  // get thought by id
  getSingleThought: (req,res) => {
    Thought.find({_id: req.params.thoughtId})
    .then(thought => res.json(thought))
    .catch((err) => res.status(500).json(err));
  },

  // create a thought
  createThought: (req, res) => {
    Thought.create(req.body)
    .then((thought) => {
      return User.findOneAndUpdate(
        {_id: req.body.userId},
        { $addToSet: { thoughts: thought._id } },
        { new: true }
      );
    })
    .then(user => res.json('created thought!'))
  },

  // update thought by id
  updateThought: (req, res) => {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { thoughtText: req.body.thoughtText },
      { new: true }
    )
    .then(thought => {
      thought 
        ? res.json(thought)
        : res.status(505).json('could not update thought')
    });
  },

  // delete a thought by id
  deleteThought: (req, res) => {
    Thought.deleteOne(
      { _id: req.params.thoughtId }
    )
    .then((thought) => {
      return User.findOneAndUpdate(
        { username: thought.username},
        { $pull: { thoughts: thought._id } },
        { new: true }
      );
    }).then(user => {
      user
        ? res.json('removed thought')
        : res.json('could not remove thought')
    });
  }
}