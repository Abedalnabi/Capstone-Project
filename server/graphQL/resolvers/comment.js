const db = require('../../config/db/db');
const { getUserByID } = require('./user');
const { tblComments } = db;

module.exports = {
  getAllCommentsByUserId: async (args) => {
    const { userID } = args;
    try {
      const comments = await tblComments.findAll({
        where: {
          commenter_id: userID,
        },
      });
      return comments;
    } catch (err) {
      throw new Error(err);
    }
  },

  addNewCommentToPost: async (args) => {
    const { comment, post_id, commenter_id } = args.commentInput;
    try {
      const newComment = await tblComments.create({
        comment,
        post_id,
        commenter_id,
      });
      newComment.commenter = await getUserByID({ userID: commenter_id });
      return newComment;
    } catch (error) {
      throw new Error(error);
    }
  },

  updateComment: async (args) => {
    const commentID = args.commentID;
    const comment = args.comment;

    try {
      const [isCommentUpdated] = await tblComments.update(
        { comment },
        {
          where: {
            comment_id: commentID,
          },
        }
      );
      if (!isCommentUpdated) throw new Error('Use new comment information');
      return 'comment is updated';
    } catch (error) {
      throw new Error(error);
    }
  },

  deleteComment: async (args) => {
    const commentID = args.commentID;
    try {
      const postTargetToDelete = await tblComments.findOne({
        where: { comment_id: commentID },
      });
      if (!postTargetToDelete) throw new Error('Comment did not exist to delete, please add a valid commentID');
      await tblComments.destroy({
        where: {
          comment_id: commentID,
        },
      });
      return `Comment deleted successfully`;
    } catch (err) {
      throw new Error(err);
    }
  },
};
