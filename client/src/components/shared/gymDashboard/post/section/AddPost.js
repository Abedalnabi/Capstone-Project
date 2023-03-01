import React, { useState } from 'react';
import AlertDialog from '../../../Utilities/AlertDialog/AlertDialog';
import { addNewPost } from '../../../../../api/graphql/posts';
import usePostContext from '../../../../../contextApi/contexts/PostContext';
import useUserContext from '../../../../../contextApi/contexts/UserContext';
import { Box } from '@mui/material';

const AddPost = () => {
  const [newPostValue, setNewPostValue] = useState();
  const { userInfo } = useUserContext();
  const { addPost } = usePostContext();

  async function handleNewPosts() {
    const newAddedPostValue = await addNewPost(userInfo.userId, newPostValue);
    addPost(newAddedPostValue);
  }

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'end', pt: '90px' }}>
        <AlertDialog
          add={'50px'}
          service={'Add new post'}
          description={''}
          action={'Edit'}
          onClickAction={handleNewPosts}
          setUpdatedPostValue={setNewPostValue}
        />
      </Box>
    </div>
  );
};

export default AddPost;
