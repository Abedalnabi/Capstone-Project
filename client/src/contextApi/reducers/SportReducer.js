import ACTIONS from '../actions/SportAction';

export const initialState = {
  sports: [],
  sportList: [],
};

const Reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_SPORTS:
      return { ...state, sports: payload };
    case ACTIONS.SET_SPORTS_LIST:
      return { ...state, sportList: payload.sportList };

    default:
      throw new Error(`No case for this type ==> ${type}`);
  }
};

export default Reducer;
