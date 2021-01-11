import { handleActions } from 'redux-actions';
import {setUserInfoAction} from '../action';
// import {} from '../actions';
const initialState = {
  userInfo: [],
};

export default handleActions(
  {
    [setUserInfoAction.toString()]: (state, {payload}) => ({
      ...state,
      userInfo: payload,
      
    }),
  },
  initialState,
);
