import {
  actionTypes,
  GetFlights,
  GetBusinessFlights,
  GetBusinessFlightsSuccess,
  GetBusinessFlightsFailure,
  GetCheapFlights,
  GetCheapFlightsSuccess,
  GetCheapFlightsFailure,
  CreateFlight,
  CreateFlightSuccess,
  CreateFlightFailure,
  UpdateFlight,
  UpdateFlightSuccess,
  UpdateFlightFailure,
  DeleteFlight,
  DeleteFlightSuccess,
  DeleteFlightFailure 
} from './flights';

describe('Flight Actions Test', () => {
  it('Check GetFlights Action', () => {
    const expectedAction = {
      type: actionTypes.GET_FLIGHTS,
    };
    expect(GetFlights()).toEqual(expectedAction);
  });

  it('Check GetBusinessFlights Action', () => {
    const expectedAction = {
      type: actionTypes.GET_BUSINESS_FLIGHTS,
    };
    expect(GetBusinessFlights()).toEqual(expectedAction);
  });
  it('Check GetBusinessFlightsSuccess Action', () => {
    const expectedAction = {
      type: actionTypes.GET_BUSINESS_FLIGHTS_SUCCESS,
      payload: [],
    };
    expect(GetBusinessFlightsSuccess([])).toEqual(expectedAction);
  });
  it('Check GetBusinessFlightsFailure Action', () => {
    const expectedAction = {
      type: actionTypes.GET_BUSINESS_FLIGHTS_FAILURE,
    };
    expect(GetBusinessFlightsFailure()).toEqual(expectedAction);
  });

  it('Check GetCheapFlights Action', () => {
    const expectedAction = {
      type: actionTypes.GET_CHEAP_FLIGHTS,
    };
    expect(GetCheapFlights()).toEqual(expectedAction);
  });
  it('Check GetCheapFlightsSuccess Action', () => {
    const expectedAction = {
      type: actionTypes.GET_CHEAP_FLIGHTS_SUCCESS,
      payload: [],
    };
    expect(GetCheapFlightsSuccess([])).toEqual(expectedAction);
  });
  it('Check GetCheapFlightsFailure Action', () => {
    const expectedAction = {
      type: actionTypes.GET_CHEAP_FLIGHTS_FAILURE,
    };
    expect(GetCheapFlightsFailure()).toEqual(expectedAction);
  });

  it('Check CreateFlight Action', () => {
    const expectedAction = {
      type: actionTypes.CREATE_FLIGHT,
    };
    expect(CreateFlight()).toEqual(expectedAction);
  });
  it('Check CreateFlightSuccess Action', () => {
    const expectedAction = {
      type: actionTypes.CREATE_FLIGHT_SUCCESS,
    };
    expect(CreateFlightSuccess()).toEqual(expectedAction);
  });
  it('Check CreateFlightFailure Action', () => {
    const expectedAction = {
      type: actionTypes.CREATE_FLIGHT_FAILURE,
    };
    expect(CreateFlightFailure()).toEqual(expectedAction);
  });

  it('Check UpdateFlight Action', () => {
    const expectedAction = {
      type: actionTypes.UPDATE_FLIGHT,
    };
    expect(UpdateFlight()).toEqual(expectedAction);
  });
  it('Check UpdateFlightSuccess Action', () => {
    const expectedAction = {
      type: actionTypes.UPDATE_FLIGHT_SUCCESS,
    };
    expect(UpdateFlightSuccess()).toEqual(expectedAction);
  });
  it('Check UpdateFlightFailure Action', () => {
    const expectedAction = {
      type: actionTypes.UPDATE_FLIGHT_FAILURE,
    };
    expect(UpdateFlightFailure()).toEqual(expectedAction);
  });

  it('Check DeleteFlight Action', () => {
    const expectedAction = {
      type: actionTypes.DELETE_FLIGHT,
    };
    expect(DeleteFlight()).toEqual(expectedAction);
  });
  it('Check DeleteFlightSuccess Action', () => {
    const expectedAction = {
      type: actionTypes.DELETE_FLIGHT_SUCCESS,
    };
    expect(DeleteFlightSuccess()).toEqual(expectedAction);
  });
  it('Check DeleteFlightFailure Action', () => {
    const expectedAction = {
      type: actionTypes.DELETE_FLIGHT_FAILURE,
    };
    expect(DeleteFlightFailure()).toEqual(expectedAction);
  });
});