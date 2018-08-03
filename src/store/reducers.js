// Action Constants
import * as actionTypes from "./actionTypes";

const initialStateSearch = {
  filter: ""
};

export const searchReducer = (state = initialStateSearch, action = {}) => {
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

const initialStateRobots = {
  robots: [],
  loading: false,
  error: ""
};

export const robotReducer = (state = initialStateRobots, action = {}) => {
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
