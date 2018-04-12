import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import profileReducer from './profileReducer';
import complainReducer from './complainReducer';

const rootReducer = combineReducers({
  loginReducer,
  complainReducer,
  profileReducer
});

export default rootReducer;
