import {takeLatest, all, put, take} from 'redux-saga/effects';
import {
  GET_LOCATION,
  APP_HOME,
  APP_LIST_ITEM,
  APP_SOURSE_DETAIL,
  APP_TREND_SEARCH,
  APP_SEARCH_COURSE,
  APP_LIST_MY_COURSE,
  APP_DISCUSSIONS_NOTE,
  APP_LEARN,
  APP_LIST_SOURCE_CATEGORY,
  APP_ADD_DISCUSSIONS,
  APP_ADD_NOTE,
  APP_SOURSE_DISCUSSION,
  APP_DOWNLOAD_FILE,
  APP_RATING_COURSE,
  APP_COMBO_HOT,
  APP_DETAIL_COMBO,
  APP_UPDATE_PROFILE,
  APP_LIST_LIVE,
  APP_CATEGORY_DETAIL,
  APP_NOTIFICATION,
  APP_DETAIL_COURSE,
  APP_ACTIVE_COURSE,
  APP_DETAIL_COMBO_COURSE,
  APP_TYPE_PAYMENT,
  APP_COMPLETE_LESSON,
  APP_CHECK_CLOSE_LESSON,
  APP_UPLOAD_AVATAR,
  APP_COURSE_DONE,
  APP_RIGISTER_FACEBOOK
} from '../actions/types';
import app from '../api/app';

import {saveHome, saveProfileUser} from '../actions/app';

import {saveListItem, saveListSourceCategory} from '../actions/app';
import {createRequestSaga} from './common';

const requestGetLocation = createRequestSaga({
  request: app.getLocation, // request được gọi trong file api/auth.js đã được defined
  key: 'getLocation',

  //  Request thành công or lỗi, 2 funtion nay chỉ có thể dispath đc action
  success: [],
  failure: [],

  //  Request thành công or lỗi, 2 funtion nay chỉ có thể thực thiện function không dispath đc action
  functionSuccess: [
    // () => todoSomething(err)
  ],
  functionFailure: [
    // () => funcHandleErr(err)
  ],
});
const requestHome = createRequestSaga({
  request: app.home,
  key: 'home',
  success: [(res) => saveHome(res)],
  failure: [],
  functionSuccess: [],
  functionFailure: [],
});

const requestListItem = createRequestSaga({
  request: app.listItem,
  key: 'listItem',
  success: [],
  failure: [],
  functionSuccess: [],
  functionFailure: [],
});
const requestSourceDetail = createRequestSaga({
  request: app.sourseDetail,
  key: 'sourseDetail',
  success: [],
  failure: [],
  functionSuccess: [],
  functionFailure: [],
});
const requestTrendSearch = createRequestSaga({
  request: app.trendsearch,
  key: 'trendsearch',
  success: [],
  failure: [],
  functionSuccess: [],
  functionFailure: [],
});
const requestSearchSourse = createRequestSaga({
  request: app.searchcourse,
  key: 'searchcourse',
  success: [],
  failure: [],
  functionSuccess: [],
  functionFailure: [],
});
const requestListMyCourse = createRequestSaga({
  request: app.listmycourse,
  key: 'listmycourse',
  success: [],
  failure: [],
  functionSuccess: [],
  functionFailure: [],
});
const requestDiscussionsNote = createRequestSaga({
  request: app.discussionsNote,
  key: 'discussionsNote',
  success: [],
  failure: [],
  functionSuccess: [],
  functionFailure: [],
});
const requestLearn = createRequestSaga({
  request: app.learn,
  key: 'learn',
  success: [],
  failure: [],
  functionSuccess: [],
  functionFailure: [],
});
const requestListSourceCategory = createRequestSaga({
  request: app.listSourceCategory,
  key: 'listSourceCategory',
  success: [
    // (res) => saveListSourceCategory(res),
  ],
  failure: [],
  functionSuccess: [],
  functionFailure: [],
});
const requestAddDiscusions = createRequestSaga({
  request: app.addDiscussions,
  key: 'addDiscussions',
  success: [],
  failure: [],
  functionSuccess: [],
  functionFailure: [],
});
const requestAddNote = createRequestSaga({
  request: app.addNote,
  key: 'addNote',
  success: [],
  failure: [],
  functionSuccess: [],
  functionFailure: [],
});
const requestSourseDiscussion = createRequestSaga({
  request: app.course_discussion,
  key: 'course_discussion',
  success: [],
  failure: [],
  functionSuccess: [],
  functionFailure: [],
});
const requestDownloadFile = createRequestSaga({
  request: app.downloadfile,
  key: 'downloadfile',
  success: [],
  failure: [],
  functionSuccess: [],
  functionFailure: [],
});
const requestRatingCourse = createRequestSaga({
  request: app.ratingCourse,
  key: 'ratingCourse',
  success: [],
  failure: [],
  functionSuccess: [],
  functionFailure: [],
});
const requestComboHot = createRequestSaga({
  request: app.comboHot,
  key: 'comboHot',
  success: [],
  failure: [],
  functionSuccess: [],
  functionFailure: [],
});
const requestDetailCombo = createRequestSaga({
  request: app.detailCombo,
  key: 'detailCombo',
  success: [],
  failure: [],
  functionSuccess: [],
  functionFailure: [],
});
const requestDetailCourse = createRequestSaga({
  request: app.detailCourse,
  key: 'detailCourse',
  success: [],
  failure: [],
  functionSuccess: [],
  functionFailure: [],
});
const requestUpdateProfile = createRequestSaga({
  request: app.updateProfile,
  key: 'updateProfile',
  success: [],
  failure: [],
  functionSuccess: [],
  functionFailure: [],
});
const requestListLive = createRequestSaga({
  request: app.listLive,
  key: 'listLive',
  success: [],
  failure: [],
  functionSuccess: [],
  functionFailure: [],
});
const requestCategoryDetail = createRequestSaga({
  request: app.categoryDetail,
  key: 'categoryDetail',
  success: [],
  failure: [],
  functionSuccess: [],
  functionFailure: [],
});

const requestNotification = createRequestSaga({
  request: app.notification,
  key: 'notification',
  success: [],
  failure: [],
  functionSuccess: [],
  functionFailure: [],
});
const requestActiveCourse = createRequestSaga({
  request: app.activeCourse,
  key: 'activeCourse',
  success: [],
  failure: [],
  functionSuccess: [],
  functionFailure: [],
});
const requestDetailComboCourse = createRequestSaga({
  request: app.detailComboCourse,
  key: 'detailComboCourse',
  success: [],
  failure: [],
  functionSuccess: [],
  functionFailure: [],
});
const requestTypePayment = createRequestSaga({
  request: app.typePayment,
  key: 'typePayment',
  success: [],
  failure: [],
  functionSuccess: [],
  functionFailure: [],
});

const requestCompleteLesson = createRequestSaga({
  request: app.completeLesson,
  key: 'completeLesson',
  success: [],
  failure: [],
  functionSuccess: [],
  functionFailure: [],
});
const requestCheckCloseLesson = createRequestSaga({
  request: app.checkCloseLesson,
  key: 'checkCloseLesson',
  success: [],
  failure: [],
  functionSuccess: [],
  functionFailure: [],
});
const requestUploadAvatar = createRequestSaga({
  request: app.uploadAvatar,
  key: 'uploadAvatar',
  success: [],
  failure: [],
  functionSuccess: [],
  functionFailure: [],
});
const requestCourseDone = createRequestSaga({
  request: app.courseDone,
  key: 'courseDone',
  success: [],
  failure: [],
  functionSuccess: [],
  functionFailure: [],
})
const requestRegisterFacebook = createRequestSaga({
  request: app.registerFacebook,
  key: 'registerFacebook',
  success: [],
  failure: [],
  functionSuccess: [],
  functionFailure: [],
})
// root saga reducer
export default [

  function* fetchWatcher() {
    yield all([
      takeLatest(GET_LOCATION, requestGetLocation),
      takeLatest(APP_HOME, requestHome),
      takeLatest(APP_LIST_ITEM, requestListItem),
      takeLatest(APP_SOURSE_DETAIL, requestSourceDetail),
      takeLatest(APP_TREND_SEARCH, requestTrendSearch),
      takeLatest(APP_SEARCH_COURSE, requestSearchSourse),
      takeLatest(APP_LIST_MY_COURSE, requestListMyCourse),
      takeLatest(APP_DISCUSSIONS_NOTE, requestDiscussionsNote),
      takeLatest(APP_LEARN, requestLearn),
      takeLatest(APP_LIST_SOURCE_CATEGORY, requestListSourceCategory),
      takeLatest(APP_ADD_DISCUSSIONS, requestAddDiscusions),
      takeLatest(APP_ADD_NOTE, requestAddNote),
      takeLatest(APP_SOURSE_DISCUSSION, requestSourseDiscussion),
      takeLatest(APP_DOWNLOAD_FILE, requestDownloadFile),
      takeLatest(APP_RATING_COURSE, requestRatingCourse),
      takeLatest(APP_COMBO_HOT, requestComboHot),
      takeLatest(APP_DETAIL_COMBO, requestDetailCombo),
      takeLatest(APP_ACTIVE_COURSE, requestActiveCourse),
      takeLatest(APP_DETAIL_COURSE, requestDetailCourse),
      takeLatest(APP_UPDATE_PROFILE, requestUpdateProfile),
      takeLatest(APP_LIST_LIVE, requestListLive),
      takeLatest(APP_CATEGORY_DETAIL, requestCategoryDetail),
      takeLatest(APP_NOTIFICATION, requestNotification),
      takeLatest(APP_DETAIL_COMBO_COURSE, requestDetailComboCourse),
      takeLatest(APP_TYPE_PAYMENT, requestTypePayment),
      takeLatest(APP_COMPLETE_LESSON, requestCompleteLesson),
      takeLatest(APP_CHECK_CLOSE_LESSON, requestCheckCloseLesson),
      takeLatest(APP_UPLOAD_AVATAR, requestUploadAvatar),
      takeLatest(APP_COURSE_DONE, requestCourseDone),
      takeLatest(APP_RIGISTER_FACEBOOK, requestRegisterFacebook),

    ]);
  },
];
