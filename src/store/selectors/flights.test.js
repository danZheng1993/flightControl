import { cheapFlights, businessFlights, flightsArray } from 'testData/flights';

import { getFlightsInProcessableFormat } from './flights';

const state = {
  flights: {
    cheapFlights,
    businessFlights
  }
};

describe('Flight Selector Test', () => {
  it('getFlightsInProcessableFormat Selector', () => {
    expect(getFlightsInProcessableFormat(state)).toEqual(flightsArray);
  });
});
