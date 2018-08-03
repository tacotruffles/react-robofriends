import * as actionsTypes from "./actionTypes";

export const setSearchField = text => ({
  type: actionsTypes.CHANGE_SEARCH_FIELD,
  payload: text
});

export const getRobots = () => {};
