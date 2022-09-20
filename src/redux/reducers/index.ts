import { combineReducers } from 'redux';

import { UserReducer } from './User';

export const Reducers = combineReducers({
  User: UserReducer
});
