import { appName, apiEndpoint } from "../config";
import { Record } from 'immutable';
import { all, take, call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { postData } from './utils';

const ReducerRecord = Record({
  user: {},
  error: null,
  loading: false
});

//constants
export const moduleName = 'auth';
export const SIGN_UP_REQUEST = `${appName}/${moduleName}/SIGN_UP_REQUEST`;
export const SIGN_UP_SUCCESS = `${appName}/${moduleName}/SIGN_UP_SUCCESS`;
export const SIGN_UP_ERROR = `${appName}/${moduleName}/SIGN_UP_ERROR`;
export const SIGN_IN_REQUEST = `${appName}/${moduleName}/SIGN_IN_REQUEST`;
export const SIGN_IN_SUCCESS = `${appName}/${moduleName}/SIGN_IN_SUCCESS`;
export const SIGN_IN_ERROR = `${appName}/${moduleName}/SIGN_IN_ERROR`;
export const SIGN_OUT_REQUEST = `${appName}/${moduleName}/SIGN_OUT_REQUEST`;
export const SIGN_OUT_SUCCESS = `${appName}/${moduleName}/SIGN_OUT_SUCCESS`;

//reducer
export default function reducer(state = new ReducerRecord(), action) {
  const {type, payload, error} = action;

  switch (type) {
    case SIGN_UP_REQUEST:
    case SIGN_IN_REQUEST:
      return state.set('loading', true);
    case SIGN_IN_SUCCESS:
    case SIGN_UP_SUCCESS:
      return state
        .set('loading', false)
        .set('user', payload)
        .set('error', null);
    case SIGN_IN_ERROR:
    case SIGN_UP_ERROR:
      return state
        .set('loading', false)
        .set('error', error);
    case SIGN_OUT_SUCCESS:
      return new ReducerRecord();
    default:
      return state;
  }
}

//action creators
export function signUp(email, password,
                       firstName, middleName, lastName, countryCode,
                       skypeId, telegramId) {
  return {
    type: SIGN_UP_REQUEST,
    payload: {
      email, password,
      firstName, middleName, lastName, countryCode,
      skypeId, telegramId
    }
  }
}

export function signIn(login, password) {
  return {
    type: SIGN_IN_REQUEST,
    payload: {login, password}
  }
}

export function signInFromStorage(userConfig) {
  return {
    type: SIGN_IN_SUCCESS,
    payload: {...userConfig}
  }
}

export function signOut() {
  return {
    type: SIGN_OUT_REQUEST
  }
}

//Saga
export const signInSaga = function* () {
  while (true) {
    const action = yield take(SIGN_IN_REQUEST);

    const response = yield call(postData, `${apiEndpoint}/services/auth/login`, action.payload);

    if(response.error) {
      yield put({
        type: SIGN_IN_ERROR,
        error: {...response}
      });
    } else {
      yield put({
        type: SIGN_IN_SUCCESS,
        payload: {...response}
      });
      yield put(push('/purchase'));
      sessionStorage.setItem('userConfig', JSON.stringify(response));
    }
  }
};

export const signUpSaga = function* () {
  while (true) {
    const action = yield take(SIGN_UP_REQUEST);

    const response = yield call(postData, `${apiEndpoint}/services/auth/register`, action.payload);

    if(response.error) {
      yield put({
        type: SIGN_UP_ERROR,
        error: {...response}
      });
    } else {
      yield put({
        type: SIGN_UP_SUCCESS,
        payload: {response}
      });
      yield put(push('/purchase'));
    }
  }
};

export const signOutSaga = function* () {
  try {
    yield put({
      type: SIGN_OUT_SUCCESS
    });
    sessionStorage.clear();
    yield put(push('/auth/signIn'));
  } catch (_) {

  }
};

export const saga = function* () {
  yield all([
    signUpSaga(),
    signInSaga(),
    takeEvery(SIGN_OUT_REQUEST, signOutSaga)
  ])
};