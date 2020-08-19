import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import { reducers } from './reducers';

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(),
  ));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);
