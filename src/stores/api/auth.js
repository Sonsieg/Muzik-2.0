import {API, token} from './common';

export default {
  login: (params = {}) =>
    API.post('id/login', params, {headers: {Authorization: token}}),

  loginFacebook: (params = {}) => API.post(`facebooklogin`, params),

  register: (params = {}) =>
    API.post(`id/register`, params, {headers: {Authorization: token}}),

  changePass: (params = {}) =>
    API.post(`id/change-password`, params, {headers: {Authorization: token}}),

  profileUser: (params = {}) => API.post(`profileuser`, params),
};
