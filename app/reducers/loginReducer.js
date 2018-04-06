import * as actionTypes from '../constants/actionTypes';
import initialState from './initialState';

const login = (state = initialState.loggedInUser, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loggedInUser: action.data
      });
    default:
      return state;
  }
};

export default login;
