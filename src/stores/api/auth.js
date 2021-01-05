import {API, token} from './common';
export default {
  login: (params = {}) =>
    API.post('id/login', params, {headers: {Authorization: token}}),
  registration: (params = {}) =>
    API.post('/id/register', params, {headers: {Authorization: token}}),
    
};
