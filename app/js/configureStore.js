import { compose, createStore, applyMiddleware,combineReducers } from 'redux';
import DevTools from './dev-tools';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import feedbacksByServer from './reducers';
import {persistState} from 'redux-devtools';
const { routeReducer } = require('redux-simple-router');

const loggerMiddleware = createLogger();

const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware, loggerMiddleware),
  DevTools.instrument(),
  persistState(getDebugSessionKey())
)(createStore);

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0)? matches[1] : null;
}
const reducer = combineReducers(Object.assign({}, {
  routing: routeReducer,
  feedbacksByServer : feedbacksByServer
}))
export default function configureStore(initialState) {
  return finalCreateStore(reducer, initialState);
}
