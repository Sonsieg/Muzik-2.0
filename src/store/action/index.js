import {createActions} from 'redux-actions';

const actions = createActions({
  FETCH_ASYNC_ACTION: (body_api) => body_api,
  LOGIN_ACTION: (body_api) => body_api,
  SET_USER_INFO_ACTION: null,
});

export const {
  fetchAsyncAction,
  loginAction,
  setUserInfoAction,
} = actions;