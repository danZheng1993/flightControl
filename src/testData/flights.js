export const parsedCheapFlightData = {
  id: "9085754394544094000",
  type: "cheap",
  departure: "test 1",
  departureTime: 1554745980000,
  arrival: "test",
  arrivalTime: 1554694800000,
};

export const cheapFlightData = {
  id: "9085754394544094000",
  type: "cheap",
  arrivalPoint: "test",
  departurePoint: "test 1",
  arrivalTime: "2019-04-08 11:40",
  departureTime: "2019-04-09 1:53"
};

export const parsedBusinessFlightData = {
  uuid: "549da066-bb5b-4d63-836c-00bbe2ccb4cb",
  flight: "Floresta -> San Telmo",
  departure: "2019-04-08T11:10:00+08:00",
  arrival: "2019-04-09T12:50:00+08:00",
}

export const businessFlightData = {
  id: "549da066-bb5b-4d63-836c-00bbe2ccb4cb",
  type: "business",
  departurePoint: "Floresta",
  arrivalPoint: "San Telmo",
  departureTime: "2019-04-08 11:10",
  arrivalTime: "2019-04-09 12:50"
};

export const cheapFlights = {
  "9085754394544094000": {
    id: "9085754394544094000",
    type: "cheap",
    departurePoint: "test",
    departureTime: 1554694800000,
    arrivalPoint: "test 1",
    arrivalTime: 1554745980000,
    arrival: "test 1",
    departure: "test",
  },
};

export const businessFlights = {
  "549da066-bb5b-4d63-836c-00bbe2ccb4cb": {
    uuid: "549da066-bb5b-4d63-836c-00bbe2ccb4cb",
    flight: "Floresta -> San Telmo",
    departure: "2019-04-08T15:10:18.000Z",
    arrival: "2019-04-08T16:50:04.000Z",
  },
};

export const flightsArray = [
  ["9085754394544094000", "cheap", "test", "test 1", "2019-04-08 11:40:0", "2019-04-09 1:53:0"],
  ["549da066-bb5b-4d63-836c-00bbe2ccb4cb", "business", "Floresta", "San Telmo", "2019-04-08 11:10:18", "2019-04-09 12:50:4"]
]