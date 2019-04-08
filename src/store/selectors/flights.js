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
    return [
      flightId,
      'business',
      departurePoint,
      arrivalPoint,
      moment(departure).format('YYYY-MM-DD h:mm'),
      moment(arrival).format('YYYY-MM-DD h:mm'),
    ]
  })
}

const parseCheapFlights = (flights) => {
  const flightIds = keys(flights);
  return flightIds.map((flightId) => {
    const { arrival, departure, arrivalTime, departureTime } = get(flights, flightId);
    return [
      flightId,
      'cheap',
      departure,
      arrival,
      moment(departureTime).format('YYYY-MM-DD h:mm'),
      moment(arrivalTime).format('YYYY-MM-DD h:mm'),
    ]
  })
}

export const getFlightsInProcessableFormat = createSelector(
  cheapFlightsSelector,
  businessFlightsSelector,
  (cheapFlights, businessFlights) => {
    const parsedCheapFlights = parseCheapFlights(cheapFlights);
    const parsedBusinessFlights = parseBusinessFlights(businessFlights);
    return [...parsedCheapFlights, ...parsedBusinessFlights];
  }
)