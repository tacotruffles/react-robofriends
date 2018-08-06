import * as actionTypes from './actionTypes';
import * as reducers from './reducers';

// Search Robot Reducer Tests
describe('searchRobots reducers', () => {
  const initialStateSearch = {
    filter: ''
  };

  it('should return the initial state', () => {
    expect(reducers.searchReducer(undefined, {})).toEqual({ filter: '' });
  });

  it('should handle CHANGE_SEARCH_FIELD action', () => {
    expect(
      reducers.searchReducer(initialStateSearch, {
        type: actionTypes.CHANGE_SEARCH_FIELD,
        payload: 'abc'
      })
    ).toEqual({ filter: 'abc' });
  });
});

describe('request the robots', () => {
  const initialStateRobots = {
    robots: [],
    loading: false,
    error: ''
  };

  it('should return the initial state', () => {
    expect(reducers.robotReducer(undefined, {})).toEqual(initialStateRobots);
  });

  it('should handle REQUEST_ROBOTS_PENDING action', () => {
    expect(
      reducers.robotReducer(initialStateRobots, {
        type: actionTypes.REQUEST_ROBOTS_PENDING,
        payload: { loading: true }
      })
    ).toEqual({
      robots: [],
      loading: true,
      error: ''
    });
  });

  it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
    expect(
      reducers.robotReducer(initialStateRobots, {
        type: actionTypes.REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: '123',
            name: 'test',
            email: 'test@gmail.com'
          }
        ]
      })
    ).toEqual({
      robots: [
        {
          id: '123',
          name: 'test',
          email: 'test@gmail.com'
        }
      ],
      loading: false,
      error: ''
    });
  });

  it('should handle REQUEST_ROBOTS_FAILED action', () => {
    expect(
      reducers.robotReducer(initialStateRobots, {
        type: actionTypes.REQUEST_ROBOTS_FAILED,
        payload: 'That is not good!'
      })
    ).toEqual({
      robots: [],
      loading: false,
      error: 'That is not good!'
    });
  });
});
