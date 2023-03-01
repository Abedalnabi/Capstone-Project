import ACTIONS from '../actions/PostAction';

export const initialState = {
  posts: [],
};

const Reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_POSTS:
      return { ...state, posts: payload };

    case ACTIONS.DELETE_POSTS:
      return {
        posts: state.posts.filter((postElement) => {
          return postElement.post_id !== payload.post_id;
        }),
      };

    case ACTIONS.UPDATE_POSTS:
      return {
        posts: state.posts.map((postElement) => {
          if (postElement.post_id === payload.post_id) return { ...postElement, post: payload.updatedPostValue };
          return postElement;
        }),
      };

    case ACTIONS.ADD_POSTS:
      return { ...state, posts: [...state.posts, payload.newAddedPostValue] };

    case ACTIONS.SET_COMMENTS:
      return {
        posts: state.posts.map((postElement) => {
          if (postElement.post_id === payload.post_id)
            return { ...postElement, comments: [...postElement.comments, payload.newCommentInfo] };
          return postElement;
        }),
      };

    case ACTIONS.DELETE_COMMENTS:
      return {
        posts: state.posts.map((postElement) => {
          if (postElement.post_id === payload.post_id)
            return {
              ...postElement,
              comments: postElement.comments.filter((comment) => {
                return comment.comment_id !== payload.comment_id;
              }),
            };
          return postElement;
        }),
      };

    case ACTIONS.UPDATE_COMMENTS:
      return {
        posts: state.posts.map((post) => {
          if (post.post_id === payload.post_id)
            return {
              ...post,
              comments: post.comments.map((commentElement) => {
                if (commentElement.comment_id === payload.comment_id) {
                  return { ...commentElement, comment: payload.UpdatedCommentValue };
                }
                return commentElement;
              }),
            };
          return post;
        }),
      };

    default:
      throw new Error(`No case for this type ==> ${type}`);
  }
};

export default Reducer;
