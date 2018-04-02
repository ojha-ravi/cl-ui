import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  loginReducer,
  profileReducer
});

export default rootReducer;
