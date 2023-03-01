import { createContext, useContext, useReducer } from 'react';
import Reducer, { initialState } from '../reducers/PostReducer';
import ACTIONS from '../actions/PostAction';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const setPosts = (posts) => {
    dispatch({
      type: ACTIONS.SET_POSTS,
      payload: posts,
    });
  };

  const deletePost = (post_id) => {
    dispatch({
      type: ACTIONS.DELETE_POSTS,
      payload: { post_id },
    });
  };

  const updatePost = (post_id, updatedPostValue) => {
    dispatch({
      type: ACTIONS.UPDATE_POSTS,
      payload: { post_id, updatedPostValue },
    });
  };

  const addPost = (newAddedPostValue) => {
    dispatch({
      type: ACTIONS.ADD_POSTS,
      payload: { newAddedPostValue },
    });
  };

  const setComment = (newCommentInfo, post_id) => {
    dispatch({
      type: ACTIONS.SET_COMMENTS,
      payload: { newCommentInfo, post_id },
    });
  };

  const deleteComment = (comment_id, post_id) => {
    dispatch({
      type: ACTIONS.DELETE_COMMENTS,
      payload: { comment_id, post_id },
    });
  };

  const updateComment = (comment_id, UpdatedCommentValue, post_id) => {
    dispatch({
      type: ACTIONS.UPDATE_COMMENTS,
      payload: { post_id, comment_id, UpdatedCommentValue },
    });
  };
  const value = {
    posts: state.posts,
    setPosts,
    deletePost,
    updatePost,
    addPost,
    setComment,
    deleteComment,
    updateComment,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

const usePostContext = () => {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error('usePostsContext must be used within Parent and his child');
  }

  return context;
};

export default usePostContext;
