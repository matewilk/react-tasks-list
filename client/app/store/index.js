import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import { tasks, sort, filter } from './reducers';

export const reducers = combineReducers({
  tasks,
  sort,
  filter,
  router: routerReducer
});