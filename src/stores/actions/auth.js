
import {
    APP_CHANGE_PASS,
    APP_LOGIN_FACEBOOK,
    APP_PROFILE_USER,
    APP_LOGIN,
    APP_LOGOUT,
    APP_REMOVE_LOGGED_USER,
    APP_RIGISTRATION,
    APP_SAVE_LOGGED_USER,
    APP_SET_AUTH_STATE,
    APP_SAVE_LOGIN
} from './types'

export const login = (...args)=>({type: APP_LOGIN, args});
export const logout = (...args)=>({type: APP_LOGOUT, args});
export const changePass = (...args)=>({type: APP_CHANGE_PASS, args});
export const loginFacebook = (...args)=>({type: APP_LOGIN_FACEBOOK, args});
export const registration = (...args)=>({type: APP_RIGISTRATION, args});
export const profileUser = (...args)=>({type: APP_PROFILE_USER, args});
//args là params truyền lên
export const setAuthState = (loggedIn) => ({
    type: APP_SET_AUTH_STATE,
    payload: loggedIn
  });
  export const saveLoggedUser = data => ({
    type: APP_SAVE_LOGGED_USER,
    payload: data
  });
//data là data trả về mình lưu vào payload