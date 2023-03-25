import {combineReducers} from 'redux';
import UserNameReducer from './username/UserName-Reducer';

const rootReducer = combineReducers({
  UserNameReducer: UserNameReducer,
});

export default rootReducer;
