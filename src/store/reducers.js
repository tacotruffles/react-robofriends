import * as actionTypes from "./actionTypes";

const initialState = {
  robots: [],
  filter: ""
};

const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.CHANGE_SEARCH_FIELD:
      // alternative
      // return Object.assign({}, state, {filter: action.payload});
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
};

export default searchReducer;
