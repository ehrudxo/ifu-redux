import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Feedback from './containers/Feedback';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import DevTools from './dev-tools';

const store = configureStore();

ReactDOM.render(
  <div>
  <Provider store={store}>
    <Feedback />
  </Provider>
  <DevTools store={store}/>
  </div>
  ,
  document.getElementById('root')
);
