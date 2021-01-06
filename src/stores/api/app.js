import {API, token} from './common';

// create request => dispath to saga
export default {
  home: () => API.get(`home`, {}, {headers: {Authorization: token}}),

  sourseDetail: (code, idUser) =>
    API.get(
      `courses/incourse/${code}/${idUser}`,
      {},
      {headers: {Authorization: token}},
    ),
  courseDone: (params = {}) =>
    API.post(`courses/get-complete-course`, params, {
      headers: {Authorization: token},
    }),

  trendsearch: (params = {}) => API.post(`trendsearch`, params),

  searchcourse: (key) =>
    API.get(
      `courses/search?key_search=${key}`,
      {},
      {headers: {Authorization: token}},
    ),

  checkCloseLesson: (params = {}) =>
    API.post(`courses/check-close-lesson`, params, {
      headers: {Authorization: token},
    }),

  uploadAvatar: (idUser, params = {}) =>
    API.post(`id/upload-avatar/${idUser}`, params, {
      headers: {Authorization: token},
    }),

  listmycourse: (idUser) =>
    API.get(
      `courses/my-courses/${idUser}`,
      {},
      {headers: {Authorization: token}},
    ),

  discussionsNote: (params = {}) => API.post(`discussionsnote`, params),

  learn: (params = {}) => API.post(`learn`, params),

  listSourceCategory: () =>
    API.get(`category/list-category`, {}, {headers: {Authorization: token}}),

  addDiscussions: (params = {}) => API.post(`adddiscussion`, params),

  addNote: (params = {}) => API.post(`addnote`, params),

  course_discussion: (params = {}) => API.post(`course_discussion`, params),

  downloadfile: (params = {}) => API.post(`downloadfile`, params),

  ratingCourse: (params = {}) => API.post(`ratingcourse`, params),

  comboHot: (params = {}) => API.post(`combohot`, params),

  detailCombo: (params = {}) => API.post(`detailcombo`, params),

  activeCourse: (params = {}) =>
    API.post(`courses/join-room`, params, {headers: {Authorization: token}}),

  detailCourse: (code, idUser) =>
    API.get(
      `courses/get/${code}/${idUser}`,
      {},
      {headers: {Authorization: token}},
    ),

  completeLesson: (params) =>
    API.post(`courses/complete-lesson`, params, {
      headers: {Authorization: token},
    }),

  typePayment: (params = {}) =>
    API.post(`payment/get-payment-type`, params, {
      headers: {Authorization: token},
    }),

  updateProfile: (idUser, params = {}) =>
    API.post(`id/update-profile/${idUser}`, params, {
      headers: {Authorization: token},
    }),

  listLive: (idUser) =>
    API.get(
      `lives/list-live-user/${idUser}`,
      {},
      {headers: {Authorization: token}},
    ),
  registerFacebook: (params = {}) =>
    API.post(
      `id/register-facebook`,
      params,
      {headers: {Authorization: token}},
    ),

  // addOrder: (params = {}) => API.post(`addorder`, params),
  categoryDetail: (idCate) =>
    API.get(
      `courses/list-course/${idCate}`,
      {},
      {headers: {Authorization: token}},
    ),

  notification: (params = {}) => API.post(`notification`, params),

  listItem: (params = {}, type) => {
    switch (type) {
      case 'promotion_course':
        return API.post(`promotioncourses`, params);
      case 'new_course':
        return API.post(`newcourses`, params);
      case 'hot_course':
        return API.post(`hotcourses`, params);
      case 'favorite_course':
        return API.post(`favoritecourse`, params);
      default:
        break;
    }
  },

  detailComboCourse: (code, idUser) =>
    API.get(
      `courses/detail-combo-course/${code}?user_id=${idUser}`,
      {},
      {headers: {Authorization: token}},
    ),
};
