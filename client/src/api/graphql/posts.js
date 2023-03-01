import axios from '../axios';
import { getStorage } from './../../config/storage';
// End points
const graphql = '/graphql';

export async function getAllPostsByUserId(userId) {
  let query = `query {
    getAllPostsByUserId(userID: ${userId}) {
      post_id
      post
      poster {
        user_id
        fullName
        image
        email
        role_id
      }
      comments {
        comment_id
        comment
        commenter {
          user_id
          fullName
          image
          email
        }
      }
    }
  }`;

  try {
    const data = await axios.post(graphql, {
      query: query,
    });
    const postsInfo = data.data.data.getAllPostsByUserId;
    return postsInfo;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deletePostByID(postID) {
  const token = getStorage('token');
  let query = `mutation {
    deletePost(postID: ${postID})
  }
  `;

  try {
    const data = await axios.post(graphql, {
      query: query,
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    const postDeletedMessage = data.data;
    return postDeletedMessage;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updatedPostByID(postID, updatedPostValue) {
  const token = getStorage('token');
  let query = `mutation {
    updatePost(postID: ${postID} ,postInput:{post:"${updatedPostValue}"}){
      post_id
      post
    }
  }
  `;

  try {
    const data = await axios.post(graphql, {
      query: query,
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    const updatedPost = data.data;
    return updatedPost;
  } catch (error) {
    throw new Error(error);
  }
}

export async function addNewPost(userId, updatedPostValue) {
  const token = getStorage('token');
  let query = `mutation {
    addNewPost(postInput:{post:"${updatedPostValue}",poster_id:${userId}}) {
      post_id
      post
      poster{
        user_id
        fullName
        image
        fullName
      }
      comments{
        comment_id
        commenter{
          user_id
          fullName
          image
        }
      }
    }
  }
  `;

  try {
    const data = await axios.post(graphql, {
      query: query,
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    const newPostValue = data.data.data.addNewPost;
    return newPostValue;
  } catch (error) {
    throw new Error(error);
  }
}
