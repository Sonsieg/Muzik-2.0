// Create action-types to use call api, save data to reducer or to do something
/**
 *  APP - Các action liên quan đến config app : Đổi ngôn ngữ, xoá cạche, reset cache, get config ...  -- app.js
 */
export const APP_HIDE_TABBAR = 'app/hideTabbar';
export const APP_SET_HEIGHT_TABBAR = 'app/setHeightTabbar';

/**
 * AUTH - Mấy thứ liên quan đến đăng nhập đăng xuất, lưu thông tin, trạng thái đăng nhập -- auth.js
 */
export const APP_SET_AUTH_STATE = "app/setAuthState";
export const APP_SAVE_LOGGED_USER = "app/saveLoggedUser";
export const APP_REMOVE_LOGGED_USER = "app/removeLoggedUser";

export const APP_LOGIN = "app/login";
export const APP_LOGIN_FACEBOOK = "app/loginFacebook";
export const APP_LOGOUT = "app/logout";
export const APP_RIGISTER = "app/register";
export const APP_CHANGE_PASS = "app/changePass";
export const APP_PROFILE_USER = "app/profileUser";

/**
 * REQUEST - Kiểm tra trạng thái của 1 request lên server: pending, success, failure -- Xem thêm trong reducers - common.js
 */
export const MARK_REQUEST_PENDING = "request/requestPending";
export const MARK_REQUEST_SUCCESS = "request/requestSuccess";
export const MARK_REQUEST_FAILED = "request/requestFailed";
export const MARK_REQUEST_CANCELLED = "request/requestCancelled";
export const INVOKE_CALLBACK = 'request/invokeCallBack';

/**
 * GALLERY - Mở modal xem ảnh - Nếu không dùng đến, thì cũng không cần quan tâm đến cái này -- common.js
 */
export const GALLERY_OPEN = "app/openGallery";
export const GALLERY_CLOSE = "app/closeGallery";
export const GET_LOCATION = "app/getLocation";

/**
 * Home
 */

export const APP_HOME = "app/home";
export const SAVE_HOME = "app/saveHome";
export const APP_LIST_ITEM ="app/listItem";

export const SAVE_LIST_ITEM = "app/saveListItem";
export const APP_SOURSE_DETAIL = "app/sourseDetail";
export const APP_TREND_SEARCH = "app/trendsearch";
export const APP_SEARCH_COURSE = "app/searchcourse";

export const APP_LIST_MY_COURSE = "app/listmycourse";
export const SAVE_LIST_MY_COURSE = "app/saveListMyCourse";
export const APP_DISCUSSIONS_NOTE = "app/discussionsNote";
export const APP_LEARN = "app/learn";
export const APP_LIST_SOURCE_CATEGORY = "app/listSourceCategory";
export const APP_CATEGORY_DETAIL = "app/categoryDetail";
export const APP_DETAIL_COURSE = "app/detailCourse";
export const APP_SET_CHANGE_SPLASH = "app/setChangeSplash";
export const APP_ACTIVE_COURSE = "app/activeCourse";

export const SAVE_LIST_SOURCE_CATEGORY = "app/saveListSourceCategory";

export const APP_ADD_DISCUSSIONS = "app/addDiscussions";
export const APP_ADD_NOTE = "app/addNote";
export const APP_SOURSE_DISCUSSION = "app/course_discussion";
export const APP_DOWNLOAD_FILE = "app/downloadfile";

export const APP_RATING_COURSE = "app/ratingCourse";
export const APP_COMBO_HOT = "app/comboHot";
export const APP_DETAIL_COMBO = "app/detailCombo";

export const APP_UPDATE_PROFILE = "app/updateProfile";
export const SAVE_PROFILE_USER = "app/saveProfileUser";
export const SAVE_REMOTE_CONFIG = "app/saveRemoteConfig";
export const APP_LIST_LIVE =  "app/listLive";
export const APP_NOTIFICATION = "app/notification";
export const SAVE_SHOPPING_CART = "app/saveShoppingCart";
export const SAVE_CHOOSE_ITEM_CART = "app/saveChooseItemCart";
export const SAVE_BUY_LIST_CART = "app/saveBuyListCart";

export const SAVE_SOURCE_LIST = "app/saveSourceList";

export const APP_SAVE_LOGIN = "app/saveLogin";
export const APP_SAVE_MEM_SITE = "app/saveMemSite";

export const APP_DETAIL_COMBO_COURSE = "app/detailComboCourse";

export const APP_TYPE_PAYMENT = "app/typePayment";


export const APP_COMPLETE_LESSON = "app/completeLesson";
export const APP_CHECK_CLOSE_LESSON = "app/checkCloseLesson";
export const APP_UPLOAD_AVATAR = "app/uploadAvatar";
export const APP_COURSE_DONE = "app/courseDone";
export const APP_RIGISTER_FACEBOOK = "app/registerFacebook";




