import { put, takeEvery, call } from 'redux-saga/effects';

import { fetchBusinessFlights, fetchCheapFlights } from 'api';
import { parseCheapFlights, parseBusinessFlights } from 'utils/data';

import { actionTypes } from '../actions/flights';

function* getFlights(action) {
  yield put({ type: actionTypes.GET_BUSINESS_FLIGHTS });
  yield put({ type: actionTypes.GET_CHEAP_FLIGHTS });
}

function* getCheapFlights(action) {
  try {
    const result = yield call(fetchCheapFlights);
    yield put({ type: actionTypes.GET_CHEAP_FLIGHTS_SUCCESS, payload: parseCheapFlights(result) });
  } catch (err) {
    yield put({ type: actionTypes.GET_CHEAP_FLIGHTS_FAILURE });
  }
}

function* getBusinessFlights(action) {
  try {
    const result = yield call(fetchBusinessFlights);
    yield put({ type: actionTypes.GET_BUSINESS_FLIGHTS_SUCCESS, payload: parseBusinessFlights(result) });
  } catch (err) {
    yield put({ type: actionTypes.GET_BUSINESS_FLIGHTS_FAILURE });
  }
}

export default function* FlightSaga() {
  yield takeEvery(actionTypes.GET_FLIGHTS, getFlights);
  yield takeEvery(actionTypes.GET_CHEAP_FLIGHTS, getCheapFlights);
  yield takeEvery(actionTypes.GET_BUSINESS_FLIGHTS, getBusinessFlights);
}
