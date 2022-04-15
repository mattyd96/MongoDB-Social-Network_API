const { Schema, model } = require('mongoose');

// regex for validating emails
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Schema
const userSchema = new Schema(
  {
    username: { type: String, unique: true, required: true, trim: true },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      match: emailRegex,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false,
  }
);

// virtual for getting friend count -> friendCount
userSchema
  .virtual('friendCount')
  .get(function () {
    return this.friends.length;
  });


// create model
const User = model('user', userSchema);

module.exports = User;