import USER_ACTIONS from '../actions/UserActions';

export const initialState = {
  token: '',
  userInfo: {},
  userDetails: {},
};

const UserReducer = (state, { type, payload }) => {
  switch (type) {
    case USER_ACTIONS.SET_USER_TOKEN:
      return { ...state, token: payload };

    case USER_ACTIONS.SET_USER_INFO:
      return { ...state, userInfo: payload.userInfo };

    case USER_ACTIONS.SET_USER_DETAILS:
      return { ...state, userDetails: payload.userDetails };

    case USER_ACTIONS.CLEAR_USER_DETAILS:
      return { ...state, userInfo: payload.userDetails };

    default:
      throw new Error(`No case for this type ==> ${type}`);
  }
};

export default UserReducer;
