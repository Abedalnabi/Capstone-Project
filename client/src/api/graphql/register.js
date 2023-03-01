import axios from '../axios';
// End points
const graphql = '/graphql';

export async function addUser(userInfo) {
  const userInformation = {};
  userInfo.forEach((ele) => {
    if (ele) {
      userInformation[ele.name] = ele.value;
    }
  });

  let query = `mutation {
    addUser(userInput: {
    fullName: "${userInformation.fullName}",
    role_id: ${userInformation.role_id},
    password: "${userInformation.password}",
    birthDate: "${userInformation.birthDate}",
    sport_id: ${userInformation.sport_id ? userInformation.sport_id : null},
    email: "${userInformation.email}",
    image: "${userInformation.file}"
  })
    {
      user_id
      birthDate
      email
      password
      image
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
