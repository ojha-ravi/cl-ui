import loginHandler from '../apiHandler/login';
import * as actionTypes from '../constants/actionTypes';

export function loginSuccess(data) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    data
  };
}

export default function login() {
  return dispatch =>
    loginHandler()
      .then(res => res.data)
      .then(loginSuccess)
      .then(dispatch);
}
