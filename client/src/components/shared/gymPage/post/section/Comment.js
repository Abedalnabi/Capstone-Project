import React, { useState } from 'react';
import { Box, Typography, Avatar, Divider } from '@mui/material';
import useUserContext from '../../../../../contextApi/contexts/UserContext';
import style from '../../style';
import DeleteComment from './DeleteComment';
import EditComment from './EditComment';
import { isLoggedIn } from '../../../common/auth';

const Comment = ({ comment, post }) => {
  const [showEditAndDelete, setShowEditAndDelete] = useState(false);
  const { userInfo } = useUserContext();

  function handleToggle() {
    setShowEditAndDelete(!showEditAndDelete);
  }

  let toggleBtn;
  if (isLoggedIn()) {
    toggleBtn = comment.commenter.user_id === userInfo.userId && (
      <Box style={style.toggleContainerStyle}>
        <Box sx={style.toggleStyle}>
          <p onClick={handleToggle}>...</p>
          {showEditAndDelete && (
            <Box style={{ backgroundColor: 'black' }} sx={{ position: 'absolute', p: '7px', right: '0px' }}>
              <Box sx={style.toggleContentStyle}>
                <DeleteComment comment_id={comment.comment_id} post_id={post.post_id} />
                <EditComment comment={comment} post_id={post.post_id} />
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      {toggleBtn}

      <Box sx={{ display: 'flex', mb: 2 }}>
        <Avatar sx={{ mt: 1 }} alt="myImage" src={comment.commenter.image} />
        <Box sx={{ ml: 2 }}>
          <Typography sx={{ mb: 1, color: 'white' }} variant="h5">
            {comment.commenter.fullName}
          </Typography>
          <Typography variant="subtitle">{comment.comment}</Typography>
        </Box>
      </Box>
      <Divider sx={{ bgcolor: 'white', mb:2 }} variant="inset" />
    </Box>
  );
};

export default Comment;
