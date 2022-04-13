const router = require('express').Router();
const reactionRoutes = require('./reactionRoutes');
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought
} = require("../../controllers/thoughtController");


// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought)

// /api/thoughts/:thoughtId/reactions
router.use('/:thoughtId/reactions', reactionRoutes);

module.exports = router;