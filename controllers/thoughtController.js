const { Thought } = require("../models")

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
  createThought: () => {},
  updateThought: () => {},
  deleteThought: () => {}
}