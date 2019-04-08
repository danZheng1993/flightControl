import { parsedCheapFlightData, cheapFlightData, businessFlightData, parsedBusinessFlightData } from 'testData/flights';

import { parseToBusinessFlight, parseToCheapFlight } from './data';

describe('Data Parsing Utility Functions Test', () => {
  it('parseToBusinessFlight function', () => {
    expect(parseToBusinessFlight(businessFlightData)).toEqual(parsedBusinessFlightData);
  });
  it('parseToCheapFlight function', () => {
    expect(parseToCheapFlight(cheapFlightData)).toEqual(parsedCheapFlightData);
  });
});
