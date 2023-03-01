import axios from '../axios';
// End points
const graphql = '/graphql';

export async function login(userInfo) {
  const userInformation = {};
  userInfo.forEach((ele) => {
    if (ele) {
      userInformation[ele.name] = ele.value;
    }
  });

  let query = `query {
    loginUser(
      email: "${userInformation.email}",
      password: "${userInformation.password}"
    )
  }
    `;

  try {
    const data = await axios.post(graphql, {
      query: query,
    });
    const loginInfo = data.data;
    return loginInfo;
  } catch (error) {
    throw new Error(error);
  }
}
