import React from 'react';

import { createContext, useContext, useReducer } from 'react';
import Reducer, { initialState } from '../reducers/UserReducer';
import ACTIONS from '../actions/UserActions';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const setToken = (token) => {
    dispatch({
      type: ACTIONS.SET_USER_TOKEN,
      payload: token,
    });
  };

  const setUserInfo = (userInfo) => {
    dispatch({
      type: ACTIONS.SET_USER_INFO,
      payload: { userInfo: userInfo },
    });
  };

  const setUserDetails = (userDetails) => {
    dispatch({
      type: ACTIONS.SET_USER_DETAILS,
      payload: { userDetails: userDetails },
    });
  };

  const clearUserInfo = () => {
    dispatch({
      type: ACTIONS.CLEAR_USER_DETAILS,
      payload: { userInfo: '' },
    });
  };

  const value = {
    setToken,
    token: state.token,
    userInfo: state.userInfo,
    userDetails: state.userDetails,
    setUserInfo,
    setUserDetails,
    clearUserInfo,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useParentContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUserContext must be used within Parent and his child');
  }
  return context;
};

export default useParentContext;
