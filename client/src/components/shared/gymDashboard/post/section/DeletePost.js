import React from 'react';
import AlertDialog from '../../../Utilities/AlertDialog/AlertDialog';
import { deletePostByID } from '../../../../../api/graphql/posts';
import usePostContext from '../../../../../contextApi/contexts/PostContext';

export default function DeletePost({ post_id }) {
  const { deletePost } = usePostContext();
  function handleDeletePosts() {
    deletePost(post_id);
    deletePostByID(post_id);
  }

  return (
    <div>
      <AlertDialog
        service={'delete post'}
        description={'are you sure you want to delete this post ?'}
        action={'Delete'}
        onClickAction={handleDeletePosts}
      />
    </div>
  );
}
