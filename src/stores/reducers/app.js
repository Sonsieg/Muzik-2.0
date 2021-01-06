import {
    APP_SET_HEIGHT_TABBAR,
    APP_HIDE_TABBAR,
    CHECK_STATUS,
    SAVE_LIST_ITEM,
    SAVE_LIST_MY_COURSE,
    SAVE_HOME,
    SAVE_PROFILE_USER,
    SAVE_REMOTE_CONFIG,
    SAVE_SHOPPING_CART,
    SAVE_CHOOSE_ITEM_CART,
    SAVE_BUY_LIST_CART,
    APP_SET_CHANGE_SPLASH,
    SAVE_SOURCE_LIST
  } from '../actions/types';
  // import { saveImage } from 'actions';
  
  const init = {
    listmycourse: [],
    shoppingCart: [],
    chooseItemCart: [],
    listItem: [],
    tabBarVisible: true,
    checkStatus: '',
    heightTabbar: 0,
    home: {},
    profileUser: {},
    remoteConfig: {},
    isChanged: false,
    buyListCart: [],
    sourseList :[],
  
  };
  
  export default (state = init, {type, payload}) => {
    switch (type) {
      case SAVE_HOME:
        return {
          ...state,
          home: payload.data.data,
        };
      case SAVE_SHOPPING_CART:
        return {
          ...state,
          shoppingCart: [...state.shoppingCart, ...payload],
        };
      case SAVE_SOURCE_LIST:
        return {
          ...state,
          sourseList: payload,
        };
      case SAVE_CHOOSE_ITEM_CART:
        return {
          ...state,
          chooseItemCart: [...state.chooseItemCart, ...payload],
        };
      case SAVE_BUY_LIST_CART:
        return {
          ...state,
          buyListCart: payload,
        };
      case SAVE_REMOTE_CONFIG:
        return {
          ...state,
          remoteConfig: payload,
        };
      case SAVE_PROFILE_USER:
        return {
          ...state,
          profileUser: payload.data.data,
        };
      case APP_HIDE_TABBAR:
        return {
          ...state,
          tabBarVisible: payload,
        };
        case APP_SET_CHANGE_SPLASH:
          return {
              ...state,
              isChanged: payload || false,
          };
      case CHECK_STATUS:
        return {
          ...state,
          checkStatus: payload.checkStatus,
        };
      case APP_SET_HEIGHT_TABBAR:
        return {
          ...state,
          heightTabbar: payload,
        };
      case SAVE_LIST_ITEM: {
        if (payload.page > 1) {
          return {
            ...state,
            listItem: [...state.listItem, ...payload.data],
          };
        }
        if (payload.page === 1) {
          return {
            ...state,
            listItem: payload.data,
          };
        }
        return {
          ...state,
          listItem: payload.data,
        };
      }
      case SAVE_LIST_MY_COURSE: {
        if (payload.page > 1) {
          return {
            ...state,
            listmycourse: [...state.listmycourse, ...payload.data],
          };
        }
        if (payload.page === 1) {
          return {
            ...state,
            listmycourse: payload.data,
          };
        }
        return {
          ...state,
          listmycourse: payload.data,
        };
      }
      default:
        return state;
    }
  };
  