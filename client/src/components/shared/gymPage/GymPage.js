import React, { useEffect, useState } from 'react';
import { getAllPostsByUserId } from '../../../api/graphql/posts';
import usePostContext from '../../../contextApi/contexts/PostContext';
import { useParams } from 'react-router-dom';
import style from './style';
import { Box, Typography } from '@mui/material';
import Post from './post/Post';
import { useTheme } from '@mui/material/styles';
import Loader from '../Utilities/Loader/Loader';
import { goToTop } from '../common/goToTop';
import STATIC_TEXT from './staticText';

const GymPage = () => {
  const [loader, setLoader] = useState(false);
  const theme = useTheme();
  const { userId } = useParams();
  const { posts, setPosts } = usePostContext();

  useEffect(() => {
    getAllPosts();
    goToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getAllPosts() {
    const postsList = await getAllPostsByUserId(userId);
    setPosts(postsList);
    setLoader(true);
  }

  return (
    <Box sx={{ ...style.dashBoardContainerStyle, color: theme.palette.primary.light, pt: 9 }}>
      {loader && (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '25px', mt: '35px' }}>
          {posts.map((post, postIndex) => {
            return <Post key={postIndex} post={post} />;
          })}
        </Box>
      )}
      <Box>
        {loader && posts.length === 0 ? (
          <Typography sx={{ display: 'flex', justifyContent: 'center',color:'#212121' }} variant="h6">
            {STATIC_TEXT.noPostsAdded}
          </Typography>
        ) : (
          ''
        )}
      </Box>
      {!loader && <Loader />}
    </Box>
  );
};

export default GymPage;
