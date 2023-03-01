import { Box, Typography, Avatar, Divider } from '@mui/material';
import React from 'react';

const Comment = ({ post, showComments }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      {post.comments &&
        post.comments.map((comment, commentIndex) => {
          return (
            showComments === post.post_id && (
              <Box key={commentIndex} sx={{ mb: 1 }}>
                <Box sx={{ display: 'flex', mb: 2 }}>
                  <Avatar sx={{ mt: 1 }} alt="myImage" src={comment.commenter.image} />
                  <Box sx={{ ml: 2 }}>
                    <Typography sx={{ mb: 1, color: 'white' }} variant="h5">
                      {comment.commenter.fullName}
                    </Typography>
                    <Typography variant="subtitle">{comment.comment}</Typography>
                  </Box>
                </Box>
                <Divider sx={{ bgcolor: 'white', ml: '55px' }} variant="inset" />
              </Box>
            )
          );
        })}
    </Box>
  );
};

export default Comment;
