import axios from '../axios';
// End points
const graphql = '/graphql';

export async function addNewCommentToPost(commentInfo) {
  const { comment, post_id, commenter_id } = commentInfo;

  let query = `mutation {
      addNewCommentToPost(commentInput: {
        comment: "${comment}",
        post_id: ${post_id},
        commenter_id: ${commenter_id},
    })
      {
        comment
        comment_id
        commenter {
          user_id
          fullName
          image
        }
      }
    }
    `;

  try {
    const data = await axios.post(graphql, {
      query: query,
    });

    const newCommentInfo = data.data.data.addNewCommentToPost;
    return newCommentInfo;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteCommentByCommentID(commentID) {
  let query = `mutation {
    deleteComment(commentID: ${commentID})
  }
  `;

  try {
    const data = await axios.post(graphql, {
      query: query,
    });

    const commentDeletedMessage = data.data;
    return commentDeletedMessage;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updatedCommentByID(commentID, comment) {
  let query = `mutation {
    updateComment(commentID: ${commentID},comment: "${comment}")
  }
  `;

  try {
    const data = await axios.post(graphql, {
      query: query,
    });

    const commentUpdatedMessage = data.data;
    return commentUpdatedMessage;
  } catch (error) {
    throw new Error(error);
  }
}
