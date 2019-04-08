import moment from 'moment';

export const parseToCheapFlight = (flight) => {
  const { id, type, arrivalPoint, departurePoint, arrivalTime, departureTime } = flight;
  return {
    id,
    type,
    arrival: arrivalPoint,
    departure: departurePoint,
    arrivalTime: moment(arrivalTime).valueOf(),
    departureTime: moment(departureTime).valueOf(),
  }
};

export const parseToBusinessFlight = (flight) => {
  const { id, arrivalPoint, arrivalTime, departurePoint, departureTime } = flight;
  return {
    uuid: id,
    flight: `${departurePoint} -> ${arrivalPoint}`,
    departure: moment(departureTime).format(),
    arrival: moment(arrivalTime).format(),
  }
}