import React, { useEffect, useState } from 'react';
import { getAllPostsByUserId } from '../../../api/graphql/posts';
import useUserContext from '../../../contextApi/contexts/UserContext';
import usePostContext from '../../../contextApi/contexts/PostContext';
import { useTheme } from '@mui/material/styles';
import style from './post/style';
import Post from './post/Post';
import AddPost from './post/section/AddPost';
import { Box } from '@mui/material';
import Loader from '../Utilities/Loader/Loader';
import { goToTop } from '../common/goToTop';

const GymDashboard = () => {
  const [loader, setLoader] = useState(false);
  const { userInfo } = useUserContext();
  const { posts, setPosts } = usePostContext();
  const theme = useTheme();
  const userID = userInfo.userId;

  useEffect(() => {
    getAllPosts();
    goToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  async function getAllPosts() {
    if (userInfo.userId) {
      const postsList = await getAllPostsByUserId(userID);
      setPosts(postsList);
      setLoader(true);
    }
  }

  const myPostsList = (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '25px', mt: '35px' }}>
      {posts.map((post, postIndex) => {
        return <Post key={postIndex} post={post} />;
      })}
    </Box>
  );

  return (
    <Box sx={{ ...style.dashBoardContainerStyle, color: theme.palette.primary.light }}>
      <AddPost />
      {loader && myPostsList}
      {!loader && <Loader />}
    </Box>
  );
};

export default GymDashboard;
