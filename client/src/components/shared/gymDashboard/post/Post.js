import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import DeletePost from './section/DeletePost';
import EditPost from './section/EditPost';
import Comment from './section/Comment';
import { useTheme } from '@mui/material/styles';
import style from './style';
import STATIC_TEXT from './staticText';

const Post = ({ post }) => {
  const theme = useTheme();
  const [showComments, setShowComments] = useState('');
  const [showEditAndDelete, setShowEditAndDelete] = useState(false);

  function handelSowComments() {
    if (showComments) setShowComments('');
    else setShowComments(post.post_id);
  }

  function handleToggle() {
    setShowEditAndDelete(!showEditAndDelete);
  }

  const toggleBtn = (
    <Box style={style.toggleContainerStyle}>
      <Box sx={style.toggleStyle}>
        <p onClick={handleToggle}>...</p>
        {showEditAndDelete && (
          <Box style={{ backgroundColor: 'black' }} sx={{ position: 'absolute', p: '7px', right: '0px' }}>
            <Box sx={style.toggleContentStyle}>
              <DeletePost post_id={post.post_id} />
              <EditPost post_id={post.post_id} post={post.post} />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );

  return (
    <Box sx={{ p: 5, bgcolor: theme.palette.black.main, borderRadius: '25px' }}>
      {toggleBtn}

      <Box sx={{ mt: 3, mb: 3 }}>
        <Typography variant="h6">{post.post}</Typography>
      </Box>

      <Comment post={post} showComments={showComments} />

      <Button variant="contained" fullWidth onClick={handelSowComments}>
        {showComments ? 'hide' : 'show'} {STATIC_TEXT.comment}
      </Button>
    </Box>
  );
};

export default Post;
