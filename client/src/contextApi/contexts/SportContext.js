import { createContext, useContext, useReducer } from 'react';
import Reducer, { initialState } from '../reducers/SportReducer';
import ACTIONS from '../actions/SportAction';

const SportContext = createContext();

export const SportProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const setSport = (sports) => {
    dispatch({
      type: ACTIONS.SET_SPORTS,
      payload: sports,
    });
  };

  const setSportList = (sportList) => {
    dispatch({
      type: ACTIONS.SET_SPORTS_LIST,
      payload: { sportList },
    });
  };

  const value = {
    sports: state.sports,
    sportList: state.sportList,
    setSport,
    setSportList,
  };

  return <SportContext.Provider value={value}>{children}</SportContext.Provider>;
};

const useSportContext = () => {
  const context = useContext(SportContext);

  if (!context) {
    throw new Error('useSportContext must be used within Parent and his child');
  }

  return context;
};

export default useSportContext;
