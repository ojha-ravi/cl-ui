import loginHandler from '../apiHandler/login';
import * as actionTypes from '../constants/actionTypes';

export function loginSuccess(data) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    data
  };
}

export function login(params) {
  return dispatch =>
    loginHandler(params)
      .then(res => res.data.data)
      .then(loginSuccess)
      .then(dispatch);
}
