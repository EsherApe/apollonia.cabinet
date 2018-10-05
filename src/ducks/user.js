import { all, call, put, take } from 'redux-saga/effects';
import { apiEndpoint, appName } from '../config';
import { OrderedMap, Record } from 'immutable';
import { postData, getData, dataToEntities } from "./utils";
import { createSelector } from "reselect";

//Constants
export const moduleName = 'user';
const prefix = `${appName}/${moduleName}`;

export const GET_WALLET_TYPES_REQUEST = `${prefix}/GET_WALLET_TYPES_REQUEST`;
export const GET_WALLET_TYPES_SUCCESS = `${prefix}/GET_WALLET_TYPES_SUCCESS`;
export const GET_WALLET_TYPES_ERROR = `${prefix}/GET_WALLET_TYPES_ERROR`;

export const GET_RATES_REQUEST = `${prefix}/GET_RATES_REQUEST`;
export const GET_RATES_SUCCESS = `${prefix}/GET_RATES_SUCCESS`;
export const GET_RATES_ERROR = `${prefix}/GET_RATES_ERROR`;

export const GET_HISTORY_REQUEST = `${prefix}/GET_HISTORY_REQUEST`;
export const GET_HISTORY_SUCCESS = `${prefix}/GET_HISTORY_SUCCESS`;
export const GET_HISTORY_ERROR = `${prefix}/GET_HISTORY_ERROR`;

export const BUY_COIN_REQUEST = `${prefix}/BUY_COIN_REQUEST`;
export const BUY_COIN_SUCCESS = `${prefix}/BUY_COIN_SUCCESS`;
export const BUY_COIN_ERROR = `${prefix}/BUY_COIN_ERROR`;

export const GENERATE_ADDRESS_REQUEST = `${prefix}/GENERATE_ADDRESS_REQUEST`;
export const GENERATE_ADDRESS_SUCCESS = `${prefix}/GENERATE_ADDRESS_SUCCESS`;
export const GENERATE_ADDRESS_ERROR = `${prefix}/GENERATE_ADDRESS_ERROR`;

//Reducer
export const ReducerRecord = Record({
  generatedAddress: '',
  rates: new OrderedMap({}),
  history: new OrderedMap({}),
  walletTypes: new OrderedMap({}),
  error: null,
  loading: false,
  buyStatus: null
});

export const TransactionRecord = Record({
  id: null,
  created: null,
  status: null,
  exchangeRatio: null,
  walletType: null,
  wallet: null,
  walletAmount: null
});

export default function reducer(state = new ReducerRecord(), action) {
  const {type, payload, error} = action;

  switch (type) {
    case GET_WALLET_TYPES_REQUEST:
    case GET_RATES_REQUEST:
    case GET_HISTORY_REQUEST:
    case BUY_COIN_REQUEST:
    case GENERATE_ADDRESS_REQUEST:
      return state.set('loading', true);
    case GET_WALLET_TYPES_SUCCESS:
      return state
        .set('loading', false)
        .set('walletTypes', payload)
        .set('error', null);
    case GET_RATES_SUCCESS:
      return state
        .set('loading', false)
        .set('rates', payload)
        .set('error', null);
    case GET_HISTORY_SUCCESS:
      return state
        .set('loading', false)
        .set('history', dataToEntities(payload, TransactionRecord))
        .set('error', null);
    case BUY_COIN_SUCCESS:
      return state
        .set('loading', false)
        .set('buyStatus', payload);
    case GENERATE_ADDRESS_SUCCESS:
      return state
        .set('generatedAddress', payload);
    case GET_WALLET_TYPES_ERROR:
    case GET_RATES_ERROR:
    case GET_HISTORY_ERROR:
    case BUY_COIN_ERROR:
    case GENERATE_ADDRESS_ERROR:
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
export function getWalletTypes() {
  return {
    type: GET_WALLET_TYPES_REQUEST
  }
}

export function getRates() {
  return {
    type: GET_RATES_REQUEST
  }
}

export function getHistory() {
  return {
    type: GET_HISTORY_REQUEST
  }
}

export function buyCoin(currency, currencyAmount, wallet, generatedAddress) {
  return {
    type: BUY_COIN_REQUEST,
    payload: {currency, currencyAmount, wallet, generatedAddress}
  }
}

export function generateAddress(walletType) {
  return {
    type: GENERATE_ADDRESS_REQUEST,
    payload: {walletType}
  }
}

//Sagas
export const getWalletTypesSaga = function* () {
  while (true) {
    yield take(GET_WALLET_TYPES_REQUEST);

    let response = yield call(getData, `${apiEndpoint}/services/inventory/wallet/types`);

    if(response.error) {
      yield put({
        type: GET_WALLET_TYPES_ERROR,
        error: {...response}
      });
    } else {
      yield put({
        type: GET_WALLET_TYPES_SUCCESS,
        payload: {...response}
      });
    }
  }
};

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
        payload: {...response}
      });
    }
  }
};

export const buyCoinSaga = function* () {
  while (true) {
    const action = yield take(BUY_COIN_REQUEST);
    const response = yield call(postData, `${apiEndpoint}/services/user/buy/tokens`, action.payload);

    if(response.error) {
      yield put({
        type: BUY_COIN_ERROR,
        error: {...response}
      })
    } else {
      yield put({
        type: BUY_COIN_SUCCESS,
        payload: {...response}
      })
    }
  }
};

export const generateAddressSaga = function* () {
  while (true) {
    const action = yield take(GENERATE_ADDRESS_REQUEST);
    const {walletType} = action.payload;

    const response = yield call(getData, `${apiEndpoint}/services/user/address/${walletType}`);

    if(response.error) {
      yield put({
        type: GENERATE_ADDRESS_ERROR,
        error: {...response}
      })
    } else {
      yield put({
        type: GENERATE_ADDRESS_SUCCESS,
        payload: {...response}
      })
    }
  }
};

export function* saga() {
  yield all([
    getRatesSaga(),
    getHistorySaga(),
    buyCoinSaga(),
    generateAddressSaga(),
    getWalletTypesSaga
  ])
}