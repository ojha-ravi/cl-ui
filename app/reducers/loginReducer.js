import * as actionTypes from '../constants/actionTypes';

const loginInitialState = {
  loggedInUser: {}
};
const login = (state = loginInitialState, action) => {
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
