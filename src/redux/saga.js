import { all } from 'redux-saga/effects';
import { saga as authSaga } from '../ducks/auth';
import { saga as userSaga } from '../ducks/user';
import { saga as inventorySaga } from '../ducks/inventory';

export default function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    inventorySaga()
  ])
}