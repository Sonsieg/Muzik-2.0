import {
  APP_LOGIN,
  APP_LOGIN_FACEBOOK,
  APP_RIGISTER,
  APP_LOGOUT,
  APP_CHANGE_PASS,
  APP_SET_AUTH_STATE,
  APP_SAVE_LOGGED_USER,
  APP_REMOVE_LOGGED_USER,
  APP_PROFILE_USER,
  APP_SAVE_MEM_SITE
} from "./types";

/**
 * Action call API
 * @param  {object} args 
 */
export const login = (...args) => ({ type: APP_LOGIN, args });
export const loginFacebook = (...args) => ({ type: APP_LOGIN_FACEBOOK, args });
export const register = (...args) => ({ type: APP_RIGISTER, args });
export const logout = (...args) => ({ type: APP_LOGOUT, args });
export const changePass = (...args) => ({ type: APP_CHANGE_PASS, args });
export const profileUser = (...args) => ({ type: APP_PROFILE_USER, args });

/**
 * Sets the authentication state of the application -- Save DATA to reducer
 * @param  {boolean} newAuthState True means a user is logged in, false means no user is logged in
 */
export const setAuthState = (loggedIn, guided) => ({
  type: APP_SET_AUTH_STATE,
  payload: { loggedIn, guided }
});
export const saveLoggedUser = data => ({
  type: APP_SAVE_LOGGED_USER,
  payload: data
});
export const saveMemSite = data => ({
  type: APP_SAVE_MEM_SITE,
  payload: data
});

/**
 * Tells the app we want to log out a user
 */
export const removeLoggedUser = () => ({ type: APP_REMOVE_LOGGED_USER });
