import moment from 'moment';

export const filtersFlightsList = flightsList => {
  return flightsList.filter(flight => moment(flight.localTime).format("MMM DD YYYY") === moment(new Date()).format("MMM DD YYYY"))
};

export const formatStatus = (status, airplaneAction) => {
  const action = airplaneAction === 'departures'
    ? 'Departed at'
    : 'Landed';

  if (!status) {
    return 'On time';
  }
  const time = moment(status).format("HH:mm");

  return `${action} ${time}`;
};

export const searchFlifhtFilter = (flightsList, searchFlifht) =>
  searchFlifht
    ? flightsList.filter(({flight, destination, airlineName}) => 
        flight.toLowerCase().includes(searchFlifht.toLowerCase()) 
        || destination.toLowerCase().includes(searchFlifht.toLowerCase()) 
        || airlineName.toLowerCase().includes(searchFlifht.toLowerCase()))
    : flightsList;