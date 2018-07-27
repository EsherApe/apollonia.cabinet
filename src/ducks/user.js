import { all } from 'redux-saga/effects';
import { appName } from '../config';
import { Record } from 'immutable';

//Constants
export const moduleName = 'user';
const prefix = `${appName}/${moduleName}`;

export const TRANSACTION_HISTORY_REQUEST = `${prefix}/TRANSACTION_HISTORY_REQUEST`;
export const TRANSACTION_HISTORY_SUCCESS = `${prefix}/TRANSACTION_HISTORY_SUCCESS`;

//Reducer
export const ReducerRecord = Record({
  transactions: null,
  error: null,
  loading: false
});

export default function reducer(state = new ReducerRecord(), action) {
  const {type, payload} = action;

  switch (type) {
    case TRANSACTION_HISTORY_REQUEST:
      return state.set('loading', true);
    case TRANSACTION_HISTORY_SUCCESS:
      return state.set('transactions', payload);
    default:
      return state;
  }
}

//Selectors


//Action creators


//Sagas


export function* saga() {
  yield all([

  ])
}