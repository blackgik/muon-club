const router = require('express').Router();
const postController = require('./../controllers/PostController')

module.exports = () =>{
    router.post("/user/post/new", postController.createNewPost)

    return router
}