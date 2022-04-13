const { User } = require('../models');

module.exports = {
  // add a friend
  addFriend: async (req, res) => {
    const user = req.params.userId;
    console.log(user);
    const friend = req.params.friendId;
    console.log(friend);

    User.findOneAndUpdate(
      { _id: user },
      { $addToSet: { friends: friend } },
      { new: true }
    )
    .then(user => res.json(user))
    .catch((err) => res.status(500).json(err));
  },

  // delete a friend
  deleteFriend: (req, res) => {
    const user = req.params.userId;
    const friend = req.params.friendId;

    User.findOneAndUpdate(
      { _id: user },
      { $pull: { friends: friend } },
      { new: true }
    )
    .then(user => res.json(user))
    .catch((err) => res.status(500).json(err));
  }
}