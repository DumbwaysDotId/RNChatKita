import { combineReducers } from 'redux';

import contacts from './contacts';
import nav from './nav';
import chat from './chat';
import messages from './messages';

const reducers = combineReducers({
  contacts,
  nav,
  chat,
  messages
});

export default reducers;
