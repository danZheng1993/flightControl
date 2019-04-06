import { all, fork } from 'redux-saga/effects';

import FlightSaga from './flights';

export default function* mainSaga() {
  yield all([
    fork(FlightSaga),
  ]);
}
