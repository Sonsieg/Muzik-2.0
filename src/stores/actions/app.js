import {
    APP_HIDE_TABBAR,
    APP_SET_HEIGHT_TABBAR,
    APP_HOME,
    APP_LIST_ITEM,
    SAVE_LIST_ITEM,
    APP_SOURSE_DETAIL,
    APP_TREND_SEARCH,
    APP_SEARCH_COURSE,

    APP_LIST_MY_COURSE,
    SAVE_LIST_MY_COURSE,
    APP_DISCUSSIONS_NOTE,
    APP_LEARN,
    GET_LOCATION,
    
    APP_LIST_SOURCE_CATEGORY,
    SAVE_LIST_SOURCE_CATEGORY,
    SAVE_HOME,
    APP_SOURSE_DISCUSSION,
    APP_DOWNLOAD_FILE,
    APP_RATING_COURSE,
    APP_ACTIVE_COURSE,

    APP_ADD_DISCUSSIONS,
    APP_ADD_NOTE,
    APP_COMBO_HOT,
    APP_DETAIL_COMBO,
    APP_SET_CHANGE_SPLASH,
    APP_UPDATE_PROFILE,
    SAVE_PROFILE_USER,
    SAVE_REMOTE_CONFIG,
    APP_LIST_LIVE,
    APP_CATEGORY_DETAIL,
    SAVE_SHOPPING_CART,
    SAVE_CHOOSE_ITEM_CART,
    SAVE_BUY_LIST_CART,
    APP_NOTIFICATION,
    APP_DETAIL_COURSE,
    SAVE_SOURCE_LIST,
    APP_DETAIL_COMBO_COURSE,
    APP_SAVE_LOGIN,
    APP_TYPE_PAYMENT,

    APP_COMPLETE_LESSON,
    APP_CHECK_CLOSE_LESSON,
    APP_UPLOAD_AVATAR,
    APP_COURSE_DONE, 
    APP_RIGISTER_FACEBOOK

} from './types';

export const getLocation = (...args) => ({ type: GET_LOCATION, args });
export const listmycourse = (...args) => ({ type: APP_LIST_MY_COURSE, args });
export const home = (...args) => ({ type: APP_HOME, args });
export const listItem = (...args) => ({ type: APP_LIST_ITEM, args });
export const sourseDetail = (...args) => ({ type: APP_SOURSE_DETAIL, args });
export const trendsearch = (...args) => ({ type: APP_TREND_SEARCH, args });
export const searchcourse =  (...args) => ({ type: APP_SEARCH_COURSE, args });
export const discussionsNote =  (...args) => ({ type: APP_DISCUSSIONS_NOTE, args });
export const learn =  (...args) => ({ type: APP_LEARN, args });
export const listSourceCategory =  (...args) => ({ type: APP_LIST_SOURCE_CATEGORY, args });
export const addDiscussions =  (...args) => ({ type: APP_ADD_DISCUSSIONS, args });
export const addNote =  (...args) => ({ type: APP_ADD_NOTE, args });
export const course_discussion =  (...args) => ({ type: APP_SOURSE_DISCUSSION, args });
export const downloadfile =  (...args) => ({ type: APP_DOWNLOAD_FILE, args });
export const ratingCourse =  (...args) => ({ type: APP_RATING_COURSE, args });
export const comboHot =  (...args) => ({ type: APP_COMBO_HOT, args });
export const detailCombo =  (...args) => ({ type: APP_DETAIL_COMBO, args });
export const detailCourse = (...args) => ({ type: APP_DETAIL_COURSE, args });

export const updateProfile =  (...args) => ({ type: APP_UPDATE_PROFILE, args });
export const listLive =  (...args) => ({ type: APP_LIST_LIVE, args });
export const categoryDetail = (...args) => ({ type: APP_CATEGORY_DETAIL, args });
export const notification =  (...args) => ({ type: APP_NOTIFICATION, args });

export const activeCourse =  (...args) => ({ type: APP_ACTIVE_COURSE, args });
export const detailComboCourse = (...args) => ({ type: APP_DETAIL_COMBO_COURSE, args });

export const typePayment = (...args) => ({ type: APP_TYPE_PAYMENT, args });

export const completeLesson = (...args) => ({ type: APP_COMPLETE_LESSON, args });
export const checkCloseLesson = (...args) =>({ type: APP_CHECK_CLOSE_LESSON, args })
export const uploadAvatar = (...args) =>({ type: APP_UPLOAD_AVATAR, args });
export const courseDone = (...args) =>({ type: APP_COURSE_DONE, args });

export const registerFacebook = (...args) =>({ type: APP_RIGISTER_FACEBOOK, args });


export const setChangeSplash = (changeSplash) => ({
    type: APP_SET_CHANGE_SPLASH,
    payload: changeSplash
});

export const hideTabbar = tabBarVisible => ({
    type: APP_HIDE_TABBAR,
    payload: tabBarVisible
});
export const saveShoppingCart = data => ({
    type: SAVE_SHOPPING_CART,
    payload: data
});
export const saveBuyListCart = data => ({
    type: SAVE_BUY_LIST_CART,
    payload: data
});
export const saveChooseItemCart = data => ({
    type: SAVE_CHOOSE_ITEM_CART,
    payload: data
});

export const setHeightTabbar = heightTabbar => ({
    type: APP_SET_HEIGHT_TABBAR,
    payload: heightTabbar
});
export const saveListItem = data => ({
    type: SAVE_LIST_ITEM,
    payload: data
});
export const saveListSourceCategory = data => ({
    type: SAVE_LIST_SOURCE_CATEGORY,
    payload: data
});
export const saveListMyCourse = data => ({
    type: SAVE_LIST_MY_COURSE,
    payload: data
});
export const saveHome = data => ({
    type: SAVE_HOME,
    payload: data
});
export const saveProfileUser = data => ({
    type: SAVE_PROFILE_USER,
    payload: data
});
export const saveRemoteConfig = data => ({
    type: SAVE_REMOTE_CONFIG,
    payload: data
});
export const saveSourceList = data => ({
    type: SAVE_SOURCE_LIST,
    payload: data
});
export const saveLogin = data => ({
    type: APP_SAVE_LOGIN,
    payload: data
});
