import { compose, createStore, applyMiddleware } from 'redux';
import DevTools from './dev-tools';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
import {persistState} from 'redux-devtools';

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


export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
}
