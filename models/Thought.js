const { Schema, model } = require('mongoose');

// reaction schema -> sub document within thought schema
const reactionSchema = new Schema({
  reactionId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId()},
  reactionBody: {type: String, required: true, maxlength: 280},
  username: {type: String, required: true},
  createdAt: {type: Date, default: Date.now}
});

// thought schema
const thoughtSchema = new Schema({
  thoughtText: {type: String, required: true, minlength: 1, maxlength: 280},
  createdAt: {type: Date, default: Date.now},
  username: {type: String, required: true},
  reactions: [reactionSchema]
});

// virtual for getting friend count -> friendCount
thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  });

// create model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;