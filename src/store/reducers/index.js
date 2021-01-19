import { handleActions } from 'redux-actions';
import {setUserInfoAction, removeUserInfoAction} from '../action';
// import {} from '../actions';
const initialState = {
  userInfo: [],
};

export default handleActions(
  {
    [setUserInfoAction.toString()]: (state = initialState, {payload}) => ({
      ...state,
      userInfo: payload,
    }),
    [removeUserInfoAction.toString()]: (state,{}) =>({
      ...state,
      ...initialState,
    })
  },
  initialState,
);
