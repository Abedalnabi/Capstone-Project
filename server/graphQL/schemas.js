const { buildSchema } = require('graphql');
const userSchema = require('./schemas/user');
const roleSchema = require('./schemas/role');
const sportSchema = require('./schemas/sport');
const postSchema = require('./schemas/post');
const commentSchema = require('./schemas/comment');

module.exports = buildSchema(
  `
        ${userSchema.User}
        ${userSchema.UserInput}

        ${roleSchema.Role}

        ${sportSchema.Sport}
        ${sportSchema.SportInput}

        ${postSchema.Post}
        ${postSchema.PostInput}

        ${commentSchema.Comment}
        ${commentSchema.CommentInput}

        type RootQuery {
            ${userSchema.UserQueries}
            ${sportSchema.SportQueries}
            ${postSchema.PostQueries}
            ${commentSchema.CommentQueries}
        }

        type RootMutation {
            ${userSchema.UserMutation}
            ${postSchema.PostMutation}
            ${commentSchema.CommentMutation}
        }

        schema {
            query:RootQuery
            mutation:RootMutation
        }
    `
);
