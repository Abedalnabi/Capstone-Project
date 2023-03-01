const db = require('../../../config/db/db');

const { tblComments, tblUsers } = db;

module.exports = {
  getPosterAndCommenter: async (postsTarget) => {
    let postIndex = 0;
    for (const post of postsTarget) {
      const { dataValues } = await post.getUser();
      postsTarget[postIndex].poster = dataValues;
      const commentsTarget = await tblComments.findAll({
        where: { post_id: post.post_id },
      });
      postsTarget[postIndex].comments = [];
      let commentIndex = 0;
      for (const comment of commentsTarget) {
        postsTarget[postIndex].comments.push(comment.dataValues);
        const commentUser = await tblUsers.findOne({
          where: { user_id: comment.dataValues.commenter_id },
        });
        postsTarget[postIndex].comments[commentIndex].commenter = commentUser;
        commentIndex++;
      }
      postIndex++;
    }
    return postsTarget;
  },
};
