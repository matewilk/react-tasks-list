import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import { tasks, sort } from './reducers';

export const reducers = combineReducers({
  tasks,
  sort,
  router: routerReducer
});