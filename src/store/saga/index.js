import {call, put, takeLatest, all, fork} from 'redux-saga/effects';
import { loginAction, setUserInfoAction } from '../action';
import { loginService } from '../services';

function* loginWatch() {
  yield takeLatest(loginAction, function* ({payload}) {
    console.log("bước 2: saga quan sát action")
    try {
      const { body } = payload;
      const result = yield call(loginService, body);
      //console.log(result) // sau khi quan sát action sẽ sang service gọi API
      if (result) {
        yield put(setUserInfoAction(result.data));// sau khi trả vể response thành công, lưu data cần vào action
        if (payload?.callback) {
          console.log("bước 5, nhận response từ service rồi gọi vào callback", result)
          payload.callback('', result);
          // this.props.navigation.navigate('MyTabs');
        }
      }
    } catch (error) {
      throw error;
    } finally {
    }
  });
}
export default function* rootSaga() {
  yield all([loginWatch].map(fork));
}