import React, { useState } from 'react';
import UseUserContext from '../../../../contextApi/contexts/UserContext';
import usePostContext from '../../../../contextApi/contexts/PostContext';
import { addNewCommentToPost } from '../../../../api/graphql/comment';
import { isLoggedIn } from '../../common/auth';
import { Box, Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Comment from './section/Comment';
import { useNavigate } from 'react-router-dom';
import style from '../style';
import STATIC_TEXT from '../staticText';

const Post = ({ post }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const postID = post.post_id;
  const [showComments, setShowComments] = useState('');
  const [newComment, setNewComment] = useState('');
  const { setComment } = usePostContext();
  const { userInfo } = UseUserContext();

  function handelSowComments() {
    if (showComments) setShowComments('');
    else setShowComments(postID);
  }

  function handelChange(e) {
    setNewComment(e.target.value);
  }

  async function handelClick() {
    const commentInfo = { comment: newComment, post_id: postID, commenter_id: userInfo.userId };
    const newCommentInfo = await addNewCommentToPost(commentInfo);
    setComment(newCommentInfo, postID);
    setNewComment('');
  }

  const postComments =
    post.comments &&
    post.comments.map((comment, commentIndex) => {
      return (
        showComments === post.post_id && (
          <Comment
            key={commentIndex}
            post={post}
            comment={comment}
            commentIndex={commentIndex}
            showComments={showComments}
          />
        )
      );
    });

  return (
    <Box sx={{ p: 5, bgcolor: theme.palette.black.main, borderRadius: '25px' }}>
      <Box sx={{ mt: 3, mb: 3 }}>
        <Typography variant="h6">{post.poster.fullName}</Typography>
        <Typography variant="h6">{post.post}</Typography>
      </Box>
      {postComments}
      <div>
        {showComments && isLoggedIn() && (
          <div style={style.addCommentContainerStyle}>
            <textarea value={newComment} onChange={handelChange} style={style.textAreaCommentStyle} />
            <Button onClick={handelClick}>{STATIC_TEXT.addComment}</Button>
          </div>
        )}
        {!isLoggedIn() && (
          <p onClick={() => navigate('/login')} style={{ color: 'white', cursor: 'pointer', margin: '20px' }}>
            {STATIC_TEXT.loginToEditComment}
          </p>
        )}
      </div>
      <Button variant="contained" fullWidth onClick={handelSowComments}>
        {showComments ? 'hide' : 'show'} {STATIC_TEXT.comment}
      </Button>
    </Box>
  );
};

export default Post;
