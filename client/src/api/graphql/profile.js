import axios from '../axios';
// End points
const graphql = '/graphql';

export async function getUserByID(userId) {
  let query = `query {
    getUserByID(userID: ${userId})
    {
      user_id
      fullName
      image
      email
      birthDate
      role_id
      sport {
        type
        sport_id
      }
    }
  }
  `;

  try {
    const data = await axios.post(graphql, {
      query: query,
    });

    const userInfo = data.data.data.getUserByID;
    return userInfo;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateUser(userInformation, user_id) {
  let query = `mutation {
    updateUser(userInput: {
    user_id: ${user_id},
    fullName: "${userInformation.fullName}",
    password : "${userInformation.password}"
    birthDate: "${userInformation.birthDate}",
    email: "${userInformation.email}",

  })
    {
      user_id
      fullName
      birthDate
      email
      password
    }
  }
  `;

  try {
    const data = await axios.post(graphql, {
      query: query,
    });

    const newUserInfo = data.data;
    return newUserInfo;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteUserByID(userId) {
  let query = `mutation {
    deleteUser(userID: ${userId})
  }
  `;

  try {
    const data = await axios.post(graphql, {
      query: query,
    });

    const userDeletedMessage = data.data.data.deleteUserByID;
    return userDeletedMessage;
  } catch (error) {
    throw new Error(error);
  }
}
