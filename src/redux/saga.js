import { all } from 'redux-saga/effects';
import { saga as authSaga } from '../ducks/auth';
import { saga as transactionsSaga } from '../ducks/transactions';

export default function* rootSaga() {
  yield all([
    authSaga(),
    transactionsSaga()
  ])
}