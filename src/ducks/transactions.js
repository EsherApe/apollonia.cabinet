import { all, call, put, take } from 'redux-saga/effects';
import { apiEndpoint, appName } from '../config';
import { OrderedSet, Record } from 'immutable';
import { getData } from "./utils";

//Constants
export const moduleName = 'transactions';
const prefix = `${appName}/${moduleName}`;

export const GET_HISTORY_REQUEST = `${prefix}/GET_HISTORY_REQUEST`;
export const GET_HISTORY_SUCCESS = `${prefix}/GET_HISTORY_SUCCESS`;
export const GET_HISTORY_ERROR = `${prefix}/GET_HISTORY_ERROR`;

//Reducer
export const ReducerRecord = Record({
  history: new OrderedSet([
    {
      amount: 12,
      created: "2018-07-31T10:56:24.388Z",
      currency: "BITCOIN",
      currencyAmount: 234,
      id: 0,
      nativeAmount: 0,
      status: "CREATED",
      wallet: "string"
    },
    {
      amount: 2342,
      created: "2018-07-31T10:56:24.388Z",
      currency: "EOS",
      currencyAmount: 324,
      id: 1,
      nativeAmount: 0,
      status: "CREATED",
      wallet: "string"
    }
  ]),
  error: null,
  loading: false
});

export default function reducer(state = new ReducerRecord(), action) {
  const {type, payload, error} = action;

  switch (type) {
    case GET_HISTORY_REQUEST:
      return state.set('loading', true);
    case GET_HISTORY_SUCCESS:
      return state
        .set('loading', false)
        .set('history', payload)
        .set('error', null);
    case GET_HISTORY_ERROR:
      return state
        .set('loading', false)
        .set('error', error);
    default:
      return state;
  }
}

//Selectors


//Action creators
export function getHistory() {
  return {
    type: GET_HISTORY_REQUEST
  }
}

//Sagas
export const getHistorySaga = function* () {
  while (true) {
    yield take(GET_HISTORY_REQUEST);

    let response = yield call(getData, `${apiEndpoint}/services/user/transaction/history`);

    if(response.error) {
      yield put({
        type: GET_HISTORY_ERROR,
        error: {...response}
      });
    } else {
      yield put({
        type: GET_HISTORY_SUCCESS,
        payload: {response}
      });
    }
  }
};

export function* saga() {
  yield all([
    getHistorySaga()
  ])
}