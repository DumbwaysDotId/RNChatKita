import React from 'react';
import { Provider, connect } from 'react-redux';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';

import store from './src/publics/redux/store';
import RootNavigator from './RootNavigators';

const App = reduxifyNavigator(RootNavigator, "root");
const mapStateToProps = (state) => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(App);

const Root = () => {
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  )
}

export default Root;