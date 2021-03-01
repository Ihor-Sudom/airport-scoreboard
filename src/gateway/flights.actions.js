import { fetchFlightsList } from './flightsGateway';

export const FLIGHTS_LIST_RECIEVED = 'FLIGHTS_DEPARTURE_LIST_RECIEVED';

export const flightsListRecived = flightsList => {
  return {
    type: FLIGHTS_LIST_RECIEVED,
    payload: {
      flightsList,
    }
  };
};

export const getFlightsList = (airplaneAction, dateFlights) => {
  const thunkAction = function(dispatch) {
    fetchFlightsList(airplaneAction, dateFlights)
      .then(flightsList => dispatch(flightsListRecived(flightsList)));
  };
  return thunkAction;
};
