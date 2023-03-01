const db = require('../../config/db/db');
const { tblPosts } = db;
const { getPosterAndCommenter } = require('./resolversHelper/post');
const { getUserByID } = require('./user');
const { decodeToken } = require('../../middleware/auth');
const permission = require('../../enums/enums');

module.exports = {
  // this Function return posts and who create each post with related comments and users who commented
  getAllPostsByUserId: async (args) => {
    const userId = args.userID;
    let posts;
    try {
      posts = await tblPosts.findAll({
        where: { poster_id: userId },
      });
      posts = getPosterAndCommenter(posts);
      return posts;
    } catch (err) {
      throw new Error(err);
    }
  },

  addNewPost: async (args, req) => {
    // enum ===> "permission.gym" for gym and have permission to addPost
    const decode = decodeToken(req);
    if (decode.roleId === permission.gym) {
      const { post, poster_id } = args.postInput;
      try {
        const newPost = await tblPosts.create({
          post,
          poster_id,
        });
        newPost.poster = await getUserByID({ userID: poster_id });
        return newPost;
      } catch (error) {
        throw new Error(error);
      }
    } else {
      throw new Error("you don't have permission to call this api you should be a Gym");
    }
  },

  updatePost: async (args, req) => {
    const decode = decodeToken(req);
    if (decode.roleId === permission.gym) {
      const postID = args.postID;
      const { post } = args.postInput;
      try {
        const [isPostUpdated] = await tblPosts.update(
          { post },
          {
            where: {
              post_id: postID,
            },
          }
        );
        if (!isPostUpdated) throw new Error('Use new post information');
        return args.postInput;
      } catch (error) {
        throw new Error(error);
      }
    } else {
      throw new Error("you don't have permission to call this api you should be a Gym");
    }
  },

  deletePost: async (args, req) => {
    const decode = decodeToken(req);

    if (decode.roleId == permission.gym) {
      const postID = args.postID;
      try {
        const postTargetToDelete = await tblPosts.findOne({
          where: { post_id: postID },
        });
        if (!postTargetToDelete) throw new Error('Post did not exist to delete, please add a valid postID');
        await tblPosts.destroy({
          where: {
            post_id: postID,
          },
        });
        return `Post deleted successfully`;
      } catch (err) {
        throw new Error(err);
      }
    } else {
      throw new Error("you don't have permission to call this api you should be a Gym");
    }
  },
};
