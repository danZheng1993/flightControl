import { put, takeEvery, call } from 'redux-saga/effects';
import { set } from 'lodash';

import { actionTypes } from '../actions/flights';

import { fetchBusinessFlights, fetchCheapFlights } from 'api';

const parseBusinessFlights = (flights) => {
  const result = {};
  flights.forEach((flight) => {
    set(result, flight.uuid, flight);
  });
  return result;
}

const parseCheapFlights = (flights) => {
  const result = {};
  flights.forEach((flight) => {
    set(result, flight.id, flight);
  });
  return result;
}

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
