const router = require('express').Router();
const { addFriend, deleteFriend } = require('../../controllers/friendController');


// /api/users/:userId/friends/friendId
router.route('/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;