import {combineReducers} from 'redux';
import {requests, gallery} from './common';
import auth from './auth';
import app from './app';

export default combineReducers({
  app,
  auth,
  requests,
  ui: combineReducers({
    gallery,
  }),
});
