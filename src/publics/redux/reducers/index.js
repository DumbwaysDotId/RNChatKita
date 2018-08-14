import { combineReducers } from 'redux';

import contacts from './contacts';
import nav from './nav';

const reducers = combineReducers({
  contacts,
  nav
});

export default reducers;
