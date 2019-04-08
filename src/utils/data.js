import moment from 'moment';

export const parseToCheapFlight = (flight) => {
  const { arrivalPoint, departurePoint, arrivalTime, departureTime } = flight;
  return {
    ...flight,
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
    arrivalTime: moment(arrivalTime).format(),
  }
}