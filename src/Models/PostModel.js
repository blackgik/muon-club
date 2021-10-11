const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  post: {
    type: String,
    required: true,
    trim: true,
  },
  comments: [
    {
      comment: {
        newComment: { type: String, required: true },
        reply: [
          {
            comment: { type: String, required: true },
          },
        ],
      },
    },
  ],
});

module.exports = model("Post", PostSchema);
