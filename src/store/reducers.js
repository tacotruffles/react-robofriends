// Action Constants
import * as actionTypes from "./actionTypes";

const initialState = {
  robots: [],
  filter: "",
  loading: false
};

export const searchReducer = (state = initialState, action = {}) => {
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

export const robotReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { loading: true });
    case actionTypes.REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, { robots: action.payload, loading: false });
    case actionTypes.REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, { error: action.payload, loading: false });
    default:
      return state;
  }
};
