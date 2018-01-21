// react redux & material-ui
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

// react redux routing
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'

import App from './components/App';
import { reducers } from './store/index';

// initial state
const initialState = {
  tasks: [],
  sort: 'date'
};

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();
// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// create the store
const createStoreWithMiddleware = applyMiddleware(middleware)(createStore);
const store = createStoreWithMiddleware(
  reducers,
  (localStorage['react-tasks-list']) ?
    JSON.parse(localStorage['react-tasks-list']) :
    initialState
);

// styles
import '../public/styles/main';

store.subscribe(() => {
  localStorage['react-tasks-list'] = JSON.stringify(store.getState())
});

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);
