const postModel = require("../Models/PostModel");
const { NotFoundError } = require("../../lib/appErrors");

class Posts {
  async createNewPost(data) {
    const newPost = new postModel(data);
    await newPost.save();

    return newPost;
  }

  async fetchAllPosts() {
    return await postModel.find({});
  }

  async readPost(postID) {
    const foundPost = await postModel.findOne({ _id: postID });
    if (!foundPost) throw new NotFoundError("Invalid Id or post not found");

    return foundPost;
  }

  async deletePost(postID) {
    const deletePost = await postModel.findOneAndDelete({ _id: postID });
    if (!deletePost)
      throw new NotFoundError("Invalid Id or could not delete file");

    return deletePost;
  }

  async createComment(comment, postID) {
    const isPostExisting = await postModel.findOne({ _id: postID });
    if (!isPostExisting)
      throw new NotFoundError("Invalid Id or could not find Post");

    isPostExisting.comments.push(comment);
    await isPostExisting.save();

    return isPostExisting;
  }

  async editComment(commentID, postID, body) {
    const isPostExisting = await postModel.findOne({ _id: postID });
    if (!isPostExisting)
      throw new NotFoundError("Invalid Id or could not find Post");

    isPostExisting.comments.forEach((comment) => {
      if (comment.id === commentID) {
        comment.comment.newComment = body.comment;
      }
    });

    await isPostExisting.save();

    return isPostExisting;
  }

  async deleteComment(commentID, postID) {
    const isPostExisting = await postModel.findOne({ _id: postID });
    if (!isPostExisting)
      throw new NotFoundError("Invalid Id or could not find Post");

     const newCommentArr = isPostExisting.comments.filter(comment => comment.id !== commentID)
     isPostExisting.comments = newCommentArr

     await isPostExisting.save()

     return isPostExisting
  }
}

module.exports = new Posts();
