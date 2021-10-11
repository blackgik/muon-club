const postService = require("./../services/PostService")
const appResponse = require("./../../lib/appResponse")
const {BadRequestError} = require("./../../lib/appErrors")

class Posts {
    async createNewPost(req,res) {
        if(!req?.body) throw new BadRequestError("Missing required Fields")
        const data = req.body
        const createdPost = await postService.createNewPost(data)

        res.send(appResponse("Post created successfully",createdPost))
    }
}

module.exports = new Posts()