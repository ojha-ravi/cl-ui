import * as actionTypes from '../constants/actionTypes';

const profileInitialState = {
  currentProfile: {}
};

const profile = (state = profileInitialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        currentProfile: action.data
      });
    default:
      return state;
  }
};

export default profile;
