import * as actionTypes from '../constants/actionTypes';
import initialState from './initialState';

const complain = (state = initialState.complains, action) => {
  switch (action.type) {
    case actionTypes.CREATE_COMPLAIN_SUCCESS:
      return Object.assign({}, state, {
        currentComplain: action.data
      });
    case actionTypes.UPDATE_COMPLAIN_SUCCESS:
      return Object.assign({}, state, {
        allComplains: action.data
      });
    case actionTypes.SHOW_COMPLAIN_SUCCESS:
      return Object.assign({}, state, {
        selectedComplain: action.data
      });
    case actionTypes.REMOVE_CURRENT_COMPLAIN_SELECTION:
      return Object.assign({}, state, {
        selectedComplain: {}
      });
    case actionTypes.GET_ALL_COMPLAIN_SUCCESS:
      return Object.assign({}, state, {
        allComplains: action.data
      });
    default:
      return state;
  }
};

export default complain;
