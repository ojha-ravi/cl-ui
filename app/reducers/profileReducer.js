import * as actionTypes from '../constants/actionTypes';
import initialState from './initialState';

const profile = (state = initialState.currentProfile, action) => {
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
