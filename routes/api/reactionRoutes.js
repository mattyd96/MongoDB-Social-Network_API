const router = require('express').Router({ mergeParams: true });
const { addReaction, deleteReaction } = require('../../controllers/reactionController');


// /api/thoughts/:thoughtId/reactions
router.route('/').post(addReaction);

// /api/thoughts/:thoughtId/reactions/reactionId
router.route('/:reactionId').delete(deleteReaction);

module.exports = router;