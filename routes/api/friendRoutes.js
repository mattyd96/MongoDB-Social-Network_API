const router = require('express').Router({ mergeParams: true });
const { addFriend, deleteFriend } = require('../../controllers/friendController');


// /api/users/:userId/friends/friendId
router.route('/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;