import { handleActions } from 'redux-actions';
import { produce } from 'immer';

import { actionTypes } from '../actions/flights';

const initialState = {
  cheapFlights: {},
  businessFlights: {},
  businessLoading: false,
  cheapLoading: false,
};

export default handleActions(
  {
    [actionTypes.GET_BUSINESS_FLIGHTS]: (state) =>
      produce(state, draft => {
        draft.businessLoading = true;
      }),
    [actionTypes.GET_BUSINESS_FLIGHTS_SUCCESS]: (state, action) =>
      produce(state, draft => {
        const { payload } = action;
        draft.businessFlights = payload;
        draft.businessLoading = false;
      }),
    [actionTypes.GET_BUSINESS_FLIGHTS_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.businessLoading = false;
      }),
    [actionTypes.GET_CHEAP_FLIGHTS]: (state) => 
      produce(state, draft => {
        draft.cheapLoading = true;
      }),
    [actionTypes.GET_CHEAP_FLIGHTS_SUCCESS]: (state, action) =>
      produce(state, draft => {
        const { payload } = action;
        draft.cheapFlights = payload;
        draft.cheapLoading = false;
      }),
    [actionTypes.GET_CHEAP_FLIGHTS_FAILURE]: (state, action) =>
      produce(state, draft => {
        draft.cheapLoading = false;
      }),
  },
  initialState
);
