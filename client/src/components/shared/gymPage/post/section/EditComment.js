import React, { useState } from 'react';
import AlertDialog from '../../../Utilities/AlertDialog/AlertDialog';
import { updatedCommentByID } from '../../../../../api/graphql/comment';
import usePostContext from '../../../../../contextApi/contexts/PostContext';

const EditComment = ({ comment, post_id }) => {
  const [UpdatedCommentValue, setUpdatedCommentValue] = useState('');

  const { updateComment } = usePostContext();

  async function handleUpdateComment(commentID, postID) {
    await updatedCommentByID(commentID, UpdatedCommentValue, postID);
    updateComment(commentID, UpdatedCommentValue, postID);
  }
  return (
    <div>
      <AlertDialog
        service={'Edit comment'}
        description={comment.comment}
        action={'Edit'}
        onClickAction={() => {
          handleUpdateComment(comment.comment_id, post_id);
        }}
        setUpdatedPostValue={setUpdatedCommentValue}
      />
    </div>
  );
};

export default EditComment;
