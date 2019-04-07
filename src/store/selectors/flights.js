import { createSelector } from 'reselect';
import { get, keys } from 'lodash';
import moment from 'moment';

const cheapFlightsSelector = state => state.flights.cheapFlights;
const businessFlightsSelector = state => state.flights.businessFlights;

const parseBusinessFlights = (flights) => {
  const flightIds = keys(flights);
  return flightIds.map((flightId) => {
    const { flight, arrival, departure } = get(flights, flightId);
    const departurePoint = flight.split(' -> ')[0];
    const arrivalPoint = flight.split(' -> ')[1];
    return {
      info: {
        id: flightId,
        type: 'business'
      },
      departurePoint,
      arrivalPoint,
      arrivalTime: moment(arrival).valueOf(),
      departureTime: moment(departure).valueOf(),
    }
  })
}

const parseCheapFlights = (flights) => {
  const flightIds = keys(flights);
  return flightIds.map((flightId) => {
    const { arrival, departure, arrivalTime, departureTime } = get(flights, flightId);
    return {
      info: {
        id: flightId,
        type: 'cheap'
      },
      departurePoint: departure,
      arrivalPoint: arrival,
      arrivalTime: moment(arrivalTime).valueOf(),
      departureTime: moment(departureTime).valueOf(),
    }
  })
}

export const getFlightsInProcessableFormat = createSelector(
  cheapFlightsSelector,
  businessFlightsSelector,
  (cheapFlights, businessFlights) => {
    const parsedCheapFlights = parseCheapFlights(cheapFlights);
    const parsedBusinessFlights = parseBusinessFlights(businessFlights);
    return [...parsedCheapFlights, parsedBusinessFlights];
  }
)