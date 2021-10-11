const PostRoute = require("./PostRouter")

module.exports = (router) => {
  router.use(PostRoute())
  return router;
};
