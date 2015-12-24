import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import DevTools from './dev-tools'
import { Router, Route, Redirect } from 'react-router'
import { createHistory } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router'
import Feedback from './containers/Feedback'
import FeedbackForm from './components/FeedbackForm';
import FeedbackFormSubmitted from './components/FeedbackFormSubmitted';
import Asdf from './components/Asdf.js'

const store = configureStore();
const history = createHistory();
syncReduxAndRouter(history, store);

ReactDOM.render(
  <Provider store={store}>
    <div>
    <Router>
      <Route path="/w" component={Feedback}>
        <Route path="form" components={FeedbackForm}/>
        <Route path="submitted" components={FeedbackFormSubmitted}/>
      </Route>
      <Route path="/asdf" component={Asdf}/>
      <Redirect from="/" to="/w/form"/>
    </Router>
    <DevTools store={store}/>
    </div>
  </Provider>

  ,
  document.getElementById('root')
);
