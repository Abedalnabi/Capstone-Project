const userResolver = require('./resolvers/user');
const sportResolver = require('./resolvers/sport');
const postResolver = require('./resolvers/post');
const commentResolver = require('./resolvers/comment');

const rootResolver = {
  ...userResolver,
  ...sportResolver,
  ...postResolver,
  ...commentResolver,
};

module.exports = rootResolver;
