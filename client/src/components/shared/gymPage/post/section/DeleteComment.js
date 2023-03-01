import React from 'react';
import AlertDialog from '../../../Utilities/AlertDialog/AlertDialog';
import { deleteCommentByCommentID } from '../../../../../api/graphql/comment';
import usePostContext from '../../../../../contextApi/contexts/PostContext';

const DeleteComment = ({ comment_id, post_id }) => {
  const { deleteComment } = usePostContext();

  async function handelDelete(commentID, postID) {
    await deleteCommentByCommentID(commentID);
    deleteComment(commentID, postID);
  }

  return (
    <div>
      <AlertDialog
        service={'Delete comment'}
        description={'are you sure you want to delete the comment'}
        action={'Delete'}
        onClickAction={() => {
          handelDelete(comment_id, post_id);
        }}
      />
    </div>
  );
};

export default DeleteComment;
