import * as actionsTypes from "./actionTypes";

export const setSearchField = text => ({
  type: actionsTypes.CHANGE_SEARCH_FIELD,
  payload: text
});

export const requestRobots = () => dispatch => {
  dispatch({ type: actionsTypes.REQUEST_ROBOTS_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => dispatch({ type: actionsTypes.REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: actionsTypes.REQUEST_ROBOTS_FAILED, payload: error }));
};
