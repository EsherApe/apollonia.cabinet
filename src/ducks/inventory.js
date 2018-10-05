import { all, call, put, take } from 'redux-saga/effects';
import { apiEndpoint, appName } from '../config';
import { OrderedMap, Record } from 'immutable';
import { postData, getData, dataToEntities } from "./utils";
import { createSelector } from "reselect";

//Constants
export const moduleName = 'inventory';
const prefix = `${appName}/${moduleName}`;

export const GET_RATES_REQUEST = `${prefix}/GET_RATES_REQUEST`;
export const GET_RATES_SUCCESS = `${prefix}/GET_RATES_SUCCESS`;
export const GET_RATES_ERROR = `${prefix}/GET_RATES_ERROR`;

//Reducer
export const ReducerRecord = Record({
  rates: new OrderedMap({}),
  error: null,
  loading: false
});

export const TransactionRecord = Record({
  id: null,
  amount: null,
  created: null,
  currency: null,
  currencyAmount: null,
  nativeAmount: null,
  status: null,
  wallet: null
});

export default function reducer(state = new ReducerRecord(), action) {
  const {type, payload, error} = action;

  switch (type) {
    case GET_RATES_REQUEST:
      return state.set('loading', true);
    case GET_RATES_SUCCESS:
      return state
        .set('loading', false)
        .set('rates', dataToEntities(payload, TransactionRecord))
        .set('error', null);
    case GET_RATES_ERROR:
      return state
        .set('loading', false)
        .set('error', error);
    default:
      return state;
  }
}

//Selectors

//Action creators
export function getRates() {
  return {
    type: GET_RATES_REQUEST
  }
}

//Sagas
export const getRatesSaga = function* () {
  while (true) {
    yield take(GET_RATES_REQUEST);

    let response = yield call(getData, `${apiEndpoint}/services/inventory/exchange/rates`);

    if(response.error) {
      yield put({
        type: GET_RATES_ERROR,
        error: {...response}
      });
    } else {
      yield put({
        type: GET_RATES_SUCCESS,
        payload: {...response}
      });
    }
  }
};

export function* saga() {
  yield all([
    getRatesSaga()
  ])
}