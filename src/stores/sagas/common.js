import { call, put, take, race } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { API_TIMEOUT } from '../../constants/api';
import {
  markRequestPending,
  markRequestSuccess,
  markRequestCancelled,
  markRequestFailed,
  invokeCallback,
  forwardTo
} from '../actions/common';
import { Alert } from 'react-native';
export const rejectErrors = res => {
  const { status, data } = res;
  if (!data) {
    return Promise.reject({
      message: res.problem
    });
  }
  if (data && data.code >= 200 && data.code < 300) {
    return res;
  }
  if (data) {
    return res;
  }
 
  return Promise.reject({
    code: data.code,
    message: data.message,
    error: data.error,
    //subData.message !== 'There is missing customer email.' ? data.errors[0] : subData.message,
    status
  });
};

export const respondJson = res => res.data;
export const createRequestSaga = ({
  request,
  key,
  start,
  stop,
  success,
  failure,
  cancelled,
  functionSuccess,
  functionFailure,
  timeout = API_TIMEOUT,
  cancel,
  /*uploadProgress, downloadProgress, intervalProgress=50, */ blob
}) =>
  function* (action) 
  {
    // default is empty
    //saga sẽ lấy được action ở đây, và ở bên actions sẽ truyển vào 1 mảng args 
    console.log('Action', action);

    let args = action.args || [];
    console.log('ARGS0', args);
    const callback =
      typeof args[args.length - 1] === 'function'
        ? args[args.length - 1]
        : null;
    if (callback) {
      args = args.slice(0, -1);
    }
    // error first callback
    let ret = null;
    let err = null;
    console.log('ARGS', args);
    // store into redux
    //requestKey là key để lưu trữ state trong redux cho request đó 
    const requestKey = typeof key === 'function' ? key(...args) : key;
    if (start) {
      for (const actionCreator of start) {
        yield put(actionCreator());
      }
    }
    // mark pending
    console.log('requestKey',requestKey)
    yield put(markRequestPending(requestKey));

    try {
      // this is surely Error exception, assume as a request failed
      if (!request) {
        throw new Error('Api method not found!!!');
      }
      // start invoke
      const invokeRequest = async () => {
        const chainRequest = request.apply(request, args);
        const response = await chainRequest;
        console.log("response_________",response)
        if (response.ok && response.data.code >= 200 && response.data.code <= 400) {
          console.log('DATA', response.data);
          return response.data;
        }
        return rejectErrors(response);
      };

      // we do not wait forever for whatever request !!!
      // timeout is 0 mean default timeout, so default is 0 in case user input 0
      const raceOptions = {
        data: call(invokeRequest),
        // isTimeout: call( delay(timeout))
      };
      // đợi action cancel
      if (cancel) {
        raceOptions.cancelRet = take(cancel);
      }
      //chay race để thực hiện việc gọi request, timeout và cancel cái nào xong trước thì dừng lại
      const { data, isTimeout, cancelRet } = yield race(raceOptions);

      if (isTimeout) {
        throw new Error(`Api method is timeout after ${timeout} ms!!!`);
      } else if (cancelRet) {
        // callback on success
        if (cancelled) {
          for (const actionCreator of cancelled) {
            yield put(actionCreator(cancelRet, action));
          }
        }
        // mark cancelled request
        yield put(markRequestCancelled(cancelRet, requestKey));
      } else {
        // callback on success
        if (success) {
          for (const actionCreator of success) {
            yield put(actionCreator(data, action));
          }
        }
        if (functionSuccess) {
          for (const actionCreator of functionSuccess) {
            actionCreator(data);
          }
        }
        // finally mark the request success
        yield put(markRequestSuccess(requestKey));
        ret = data;
      }
    } catch (reason) {
      if (failure) {
        for (const actionCreator of failure) {
          yield put(actionCreator(reason, action));
        }
      }
      if (functionFailure) {
        for (const actionCreator of functionFailure) {
          actionCreator(reason);
        }
      }
      yield put(markRequestFailed(reason, requestKey));

      // mark error
      err = reason;
    } finally {
      if (stop) {
        for (const actionCreator of stop) {
          yield put(actionCreator(ret, action));
        }
      }
      // check if the last param0 is action, should call it as actionCreator
      // from where it is called, we can access action[type and args],
      // so we will use it with first error callback style
      if (callback) {
        yield put(invokeCallback(callback, err, ret));
      }
    }
  };
