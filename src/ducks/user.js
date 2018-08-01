import { all, call, put, take } from 'redux-saga/effects';
import { apiEndpoint, appName } from '../config';
import { OrderedMap, Record } from 'immutable';
import { postData, getData, dataToEntities } from "./utils";
import { createSelector } from "reselect";

//Constants
export const moduleName = 'user';
const prefix = `${appName}/${moduleName}`;

export const GET_HISTORY_REQUEST = `${prefix}/GET_HISTORY_REQUEST`;
export const GET_HISTORY_SUCCESS = `${prefix}/GET_HISTORY_SUCCESS`;
export const GET_HISTORY_ERROR = `${prefix}/GET_HISTORY_ERROR`;
export const BUY_COIN_REQUEST = `${prefix}/BUY_COIN_REQUEST`;
export const BUY_COIN_SUCCESS = `${prefix}/BUY_COIN_SUCCESS`;
export const BUY_COIN_ERROR = `${prefix}/BUY_COIN_ERROR`;

//Reducer
export const ReducerRecord = Record({
  history: new OrderedMap({}),
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
    case GET_HISTORY_REQUEST:
      return state.set('loading', true);
    case GET_HISTORY_SUCCESS:
      return state
        .set('loading', false)
        .set('history', dataToEntities(payload, TransactionRecord))
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
export const stateSelector = state => state[moduleName];
export const historySelector = createSelector(stateSelector, state => state.history);
export const transactionsListSelector = createSelector(historySelector, entities => (
  entities.valueSeq().toArray()
));

//Action creators
export function getHistory() {
  return {
    type: GET_HISTORY_REQUEST
  }
}

export function buyCoin(currency, currencyAmount, wallet, amount) {
  return {
    type: BUY_COIN_REQUEST,
    payload: {currency, currencyAmount, wallet, amount}
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

export const buyCoinSaga = function* () {
  while(true) {
    const action = yield take(BUY_COIN_REQUEST);
    const response = yield call(postData, `${apiEndpoint}/services/user/buy/tokens`, action.payload);

    console.log(response);
  }
};

export function* saga() {
  yield all([
    getHistorySaga(),
    buyCoinSaga()
  ])
}