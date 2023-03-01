import axios from '../axios';
// End points
const graphql = '/graphql';

export async function getAllSports() {
  const query = `query {
    getAllSports {
      sport_id
      type
      description
    }
  }`;

  try {
    const data = await axios.post(graphql, {
      query: query,
    });
    const allSport = data.data.data.getAllSports;
    return allSport;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getUserBySportID(sportId) {
  const query = `query {
    getUserBySportID(sportID:${sportId}) {
      user_id
      fullName
      image
    }
  }`;

  try {
    const data = await axios.post(graphql, {
      query: query,
    });
    const sportListBySportID = data.data.data.getUserBySportID;
    return sportListBySportID;
  } catch (error) {
    throw new Error(error);
  }
}
