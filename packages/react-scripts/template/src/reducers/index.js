import { combineReducers } from 'redux';

import counter from './counterReducer';
import async from './asyncReducer';
import entityRepository from './entityRepositoryReducer';

export default combineReducers({
  counter,
  async,
  entityRepository
});
