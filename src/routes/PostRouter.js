const router = require('express').Router();
const postController = require('../controllers/PostController')

module.exports = () =>{
    router.post("/user/post/new", postController.createNewPost)
    router.get("/user/fetch/posts", postController.fetchAllPosts)
    router.get("/user/read/:postID", postController.readPost)
    router.delete("/user/delete/:postID", postController.deletePost)
    router.post("/user/post/comment/new", postController.createComment)
    router.patch("/user/comment/edit/:commentID", postController.editComment)
    router.delete("/user/comment/delete/:commentID", postController.deleteComment)
    return router
}