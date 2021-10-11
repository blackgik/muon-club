const postService = require("./../services/PostService");
const appResponse = require("./../../lib/appResponse");
const { BadRequestError } = require("./../../lib/appErrors");

class Posts {
  async createNewPost(req, res) {
    if (!req?.body) throw new BadRequestError("Missing required Fields");
    const data = req.body;
    const createdPost = await postService.createNewPost(data);

    res.send(appResponse("Post created successfully", createdPost));
  }

  async fetchAllPosts(req, res) {
    const allPosts = await postService.fetchAllPosts();

    res.send(appResponse("fetched al post successfully", allPosts));
  }

  async readPost(req, res) {
    const { postID } = req.params;
    if (!postID) throw new BadRequestError("missing required Field");

    const foundPost = await postService.readPost(postID);

    res.send(appResponse("Read Post successfully", foundPost));
  }

  async deletePost(req, res) {
    const { postID } = req.params;
    if (!postID) throw new BadRequestError("missing required Field");

    const deletedPost = await postService.deletePost(postID);

    res.send(appResponse("deleted Post successfully", deletedPost));
  }

  async createComment(req, res) {
    const { postID } = req.query;
    if (!postID) throw new BadRequestError("missing required Field");

    const comment = req.body;
    const createdComment = await postService.createComment(comment, postID);

    res.send(appResponse("created Comment", createdComment));
  }

  async editComment(req, res) {
    const { postID } = req.query;
    const { commentID } = req.params;

    if (!postID) throw new BadRequestError("missing required Field");
    if (!commentID) throw new BadRequestError("missing required Field");

    const editedComment = await postService.editComment(
      commentID,
      postID,
      req.body
    );

    res.send(appResponse("edited comment successfully", editedComment));
  }

  async deleteComment(req, res) {
    const { postID } = req.query;
    const { commentID } = req.params;

    if (!postID) throw new BadRequestError("missing required Field");
    if (!commentID) throw new BadRequestError("missing required Field");

    const deletedComment = await postService.deleteComment(
        commentID,
        postID
      );

    res.send(appResponse("deleted comment successfully", deletedComment))
  }
}

module.exports = new Posts();
