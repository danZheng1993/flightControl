import { createAction } from 'redux-actions';

export const actionTypes = {
  GET_FLIGHTS: '[FLIGHTS] - Get flights',

  GET_BUSINESS_FLIGHTS: '[FLIGHTS] - Get Business flights',
  GET_BUSINESS_FLIGHTS_SUCCESS: '[FLIGHTS] - Get Business flights success',
  GET_BUSINESS_FLIGHTS_FAILURE: '[FLIGHTS] - Get Business flights failure',

  GET_CHEAP_FLIGHTS: '[FLIGHTS] - Get Cheap flights',
  GET_CHEAP_FLIGHTS_SUCCESS: '[FLIGHTS] - Get Cheap flights success',
  GET_CHEAP_FLIGHTS_FAILURE: '[FLIGHTS] - Get Cheap flights failure',

  CREATE_FLIGHT: '[FLIGHTS] - Create new flight',
  CREATE_FLIGHT_SUCCESS: '[FLIGHTS] - Create new flight Success',
  CREATE_FLIGHT_FAILURE: '[FLIGHTS] - Create new flight Failure',

  UPDATE_FLIGHT: '[FLIGHTS] - Update flight',
  UPDATE_FLIGHT_SUCCESS: '[FLIGHTS] - Update flight Success',
  UPDATE_FLIGHT_FAILURE: '[FLIGHTS] - Update flight Failure',

  DELETE_FLIGHT: '[FLIGHTS] - Delete flight',
  DELETE_FLIGHT_SUCCESS: '[FLIGHTS] - Delete flight Success',
  DELETE_FLIGHT_FAILURE: '[FLIGHTS] - Delete flight Failure'
};

export const GetFlights = createAction(actionTypes.GET_FLIGHTS, payload => payload);

export const GetBusinessFlights = createAction(actionTypes.GET_BUSINESS_FLIGHTS, payload => payload);
export const GetBusinessFlightsSuccess = createAction(actionTypes.GET_BUSINESS_FLIGHTS_SUCCESS);
export const GetBusinessFlightsFailure = createAction(actionTypes.GET_BUSINESS_FLIGHTS_FAILURE);

export const GetCheapFlights = createAction(actionTypes.GET_CHEAP_FLIGHTS, payload => payload);
export const GetCheapFlightsSuccess = createAction(actionTypes.GET_CHEAP_FLIGHTS_SUCCESS);
export const GetCheapFlightsFailure = createAction(actionTypes.GET_CHEAP_FLIGHTS_FAILURE);

export const CreateFlight = createAction(actionTypes.CREATE_FLIGHT, payload => payload);
export const CreateFlightSuccess = createAction(actionTypes.CREATE_FLIGHT_SUCCESS);
export const CreateFlightFailure = createAction(actionTypes.CREATE_FLIGHT_FAILURE);

export const UpdateFlight = createAction(actionTypes.UPDATE_FLIGHT, payload => payload);
export const UpdateFlightSuccess = createAction(actionTypes.UPDATE_FLIGHT_SUCCESS);
export const UpdateFlightFailure = createAction(actionTypes.UPDATE_FLIGHT_FAILURE);

export const DeleteFlight = createAction(actionTypes.DELETE_FLIGHT, payload => payload);
export const DeleteFlightSuccess = createAction(actionTypes.DELETE_FLIGHT_SUCCESS);
export const DeleteFlightFailure = createAction(actionTypes.DELETE_FLIGHT_FAILURE);
