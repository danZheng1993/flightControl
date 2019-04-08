import { flightsInitialState, cheapFlights, cheapFlightsArray, businessFlights, businessFlightsArray, cheapFlightData, businessFlightData } from 'testData/flights';
import { parseCheapFlights, parseBusinessFlights } from 'utils/data';

import {
  GetBusinessFlightsSuccess,
  GetCheapFlightsSuccess,
  CreateFlight,
  UpdateFlight,
} from '../actions/flights';
import flightReducer from './flights';

describe('Flight Reducer Test', () => {
  it('Check GetBusinessFlightsSuccess Action', () => {
    const expectedData = {
      ...flightsInitialState,
      businessFlights,
    };
    const action = GetBusinessFlightsSuccess(parseBusinessFlights(businessFlightsArray));
    expect(flightReducer(flightsInitialState, action)).toEqual(expectedData);
  });

  it('Check GetCheapFlightsSuccess Action', () => {
    const expectedData = {
      ...flightsInitialState,
      cheapFlights,
    };
    const action = GetCheapFlightsSuccess(parseCheapFlights(cheapFlightsArray));
    expect(flightReducer(flightsInitialState, action)).toEqual(expectedData);
  });

  it('CreateFlight Action', () => {
    const expectedData = {
      ...flightsInitialState,
      cheapFlights,
    };
    const action = CreateFlight(cheapFlightData);
    expect(flightReducer(flightsInitialState, action)).toEqual(expectedData);
  });

});