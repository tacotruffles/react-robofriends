import * as actionTypes from './actionTypes';
import * as actions from './actions';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import fetchMock from 'fetch-mock';

const mockStore = configureMockStore([thunkMiddleware]);

it('should create an action to search robots', () => {
  const searchText = 'woo';
  const expectedAction = {
    type: actionTypes.CHANGE_SEARCH_FIELD,
    payload: searchText
  };

  expect(actions.setSearchField(searchText)).toEqual(expectedAction);
});

describe('Async testing', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('handles requesting robots API', () => {
    fetchMock.getOnce('https://jsonplaceholder.typicode.com/users', {
      body: [{ id: 1, name: 'John', email: 'john@gmail.com' }],
      headers: { 'content-type': 'application/json' }
    });

    const store = mockStore({ robots: [], loading: false, error: '' });

    const expectedActions = [
      { type: actionTypes.REQUEST_ROBOTS_PENDING },
      { type: actionTypes.REQUEST_ROBOTS_SUCCESS, payload: [{ id: 1, name: 'John', email: 'john@gmail.com' }] }
    ];

    return store.dispatch(actions.requestRobots()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
