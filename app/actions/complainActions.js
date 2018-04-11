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

export function saveComplain(params) {
  complainHandler.saveComplain(params);
}

export function updateComplain(params) {
  complainHandler.updateComplain(params);
}
