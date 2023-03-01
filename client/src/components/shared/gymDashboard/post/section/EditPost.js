import React, { useState } from 'react';
import AlertDialog from '../../../Utilities/AlertDialog/AlertDialog';
import { updatedPostByID } from '../../../../../api/graphql/posts';
import usePostContext from '../../../../../contextApi/contexts/PostContext';

export default function EditPost({ post_id, post }) {
  const [updatedPostValue, setUpdatedPostValue] = useState();
  const { updatePost } = usePostContext();

  function handleUpdatePosts() {
    updatedPostByID(post_id, updatedPostValue);
    updatePost(post_id, updatedPostValue);
  }

  return (
    <div>
      <AlertDialog
        service={'Edit post'}
        description={post}
        action={'Edit'}
        onClickAction={handleUpdatePosts}
        setUpdatedPostValue={setUpdatedPostValue}
      />
    </div>
  );
}
