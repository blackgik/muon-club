const postModel = require("./../Models/PostModel")

class Posts {
    async createNewPost(data) {
        const newPost = new postModel(data);
        await newPost.save();

        return newPost;
    }
}

module.exports = new Posts();