import profileHandler from '../apiHandler/profile';
import * as actionTypes from '../constants/actionTypes';

export function getUserProfileSuccess(data) {
  return {
    type: actionTypes.GET_PROFILE_SUCCESS,
    data
  };
}

export function getUserProfile(params) {
  return dispatch =>
    profileHandler(params)
      .then(res => res.data.data)
      .then(getUserProfileSuccess)
      .then(dispatch);
}
