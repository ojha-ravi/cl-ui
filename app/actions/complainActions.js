import * as complainHandler from '../apiHandler/complain';
import * as actionTypes from '../constants/actionTypes';

export function saveComplainSuccess(data) {
  return {
    type: actionTypes.CREATE_COMPLAIN_SUCCESS,
    data
  };
}

export function updateComplainSuccess(data) {
  return {
    type: actionTypes.UPDATE_COMPLAIN_SUCCESS,
    data
  };
}

export function getAllComplainSuccess(data) {
  return {
    type: actionTypes.GET_ALL_COMPLAIN_SUCCESS,
    data
  };
}

export function getAllComplain(params) {
  return dispatch =>
    complainHandler
      .getAllComplain(params)
      .then(res => res.data)
      .then(getAllComplainSuccess)
      .then(dispatch);
}

export function showComplainSuccess(data) {
  return {
    type: actionTypes.SHOW_COMPLAIN_SUCCESS,
    data
  };
}

export function showComplain(params) {
  return dispatch =>
    complainHandler
      .showComplain(params)
      .then(res => res.data)
      .then(showComplainSuccess)
      .then(dispatch);
}

export function saveComplain(params) {
  return dispatch =>
    complainHandler
      .saveComplain(params)
      .then(res => res.data)
      .then(saveComplainSuccess)
      .then(dispatch);
}

export function updateComplain(params) {
  return dispatch =>
    complainHandler
      .updateComplain(params)
      .then(res => res.data)
      .then(updateComplainSuccess)
      .then(dispatch);
}
