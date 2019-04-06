import axios from 'axios';

import { cheapFlightUrl, businessFlightUrl } from './config';

export const fetchCheapFlights = () => {
  return axios.get(cheapFlightUrl)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return [];
    });
};

export const fetchBusinessFlights = () => {
  return axios.get(businessFlightUrl)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return [];
    });
}