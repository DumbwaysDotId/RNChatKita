import promiseMiddleware from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

const middlewares = [];

// middleware nav
const nav = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);
middlewares.push(nav);

// middleware redux promise
const promise = promiseMiddleware();
middlewares.push(promise);

// middlewares logger
const logger = createLogger();
middlewares.push(logger);

export default middlewares;