import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './components/App.js';
import reducers from './reducers';

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>, 
  document.querySelector('#root')
);