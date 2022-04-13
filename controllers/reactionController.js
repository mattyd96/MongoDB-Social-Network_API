const { Thought } = require("../models")

module.exports = {
  // add reaction
  addReaction: (req, res) => {
    Thought.findOneAndUpdate(
      {_id: req.params.thoughtId},
      { $addToSet: { reactions: req.body } },
      { new: true }
    )
    .then(thought => {
      thought
        ? res.json(thought)
        : res.json.status(505).json("couldn't add reaction")
    })
    .catch((err) => res.status(500).json(err));
  },

  // delete reaction by id
  deleteReaction: (req, res) => {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { _id: req.params.reactionId } } },
      { new: true }
    )
    .then(thought => {
      thought
        ? res.json(thought)
        : res.status(505).json("error removing reaction")
    })
    .catch((err) => res.status(500).json(err));
  }
}