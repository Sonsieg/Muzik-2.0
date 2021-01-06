import {takeLatest, all, put, take} from 'redux-saga/effects';
import {
  APP_LOGIN,
  APP_LOGIN_FACEBOOK,
  APP_RIGISTER,
  APP_CHANGE_PASS,
  APP_PROFILE_USER,
} from '../actions/types';
import auth from '../api/auth';
import {saveProfileUser} from '../actions/app';
import {setAuthState, saveLoggedUser, removeLoggedUser} from '../actions/auth';
import {createRequestSaga} from './common';

const requestLogin = createRequestSaga({
  request: auth.login, 
  key: 'login',
  success: [
    // (res) => {saveLoggedUser(res)},
    // () => setAuthState(true),
  ],
  failure: [
    // (err) => todoHandleErr(err)
  ],
  //  Request thành công or lỗi, 2 funtion nay chỉ có thể thực thiện function không dispath đc action
  functionSuccess: [
    // () => todoSomething(err)
  ],
  functionFailure: [
    // () => funcHandleErr(err)
  ],
});
const requestRegister = createRequestSaga({
  request: auth.register,
  key: 'register',
  success: [],
  failure: [],
  functionSuccess: [],
  functionFailure: [],
});
const requestChangePass = createRequestSaga({
  request: auth.changePass,
  key: 'changePass',
  success: [],
  failure: [],
  functionSuccess: [],
  functionFailure: [],
});
const requestProfileUser = createRequestSaga({
  request: auth.profileUser,
  key: 'profileUser',
  success: [(res) => saveProfileUser(res)],
  failure: [],
  functionSuccess: [],
  functionFailure: [],
});
const requestLoginFacebook = createRequestSaga({
  request: auth.loginFacebook,
  key: 'loginFacebook',
  success: [(res) => saveLoggedUser(res), () => setAuthState(true)],
  failure: [],
  functionSuccess: [],
  functionFailure: [],
});

export default [
  function* fetchWatcher() {
    yield all([
      takeLatest(APP_LOGIN, requestLogin),
      takeLatest(APP_LOGIN_FACEBOOK, requestLoginFacebook),
      takeLatest(APP_RIGISTER, requestRegister),
      takeLatest(APP_CHANGE_PASS, requestChangePass),
      takeLatest(APP_PROFILE_USER, requestProfileUser),
    ]);
  },
];
