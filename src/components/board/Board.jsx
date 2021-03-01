import React, { useEffect, } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import qs from 'qs';
import moment from 'moment';
import './board.scss';
import FlightsBoard from '../flights-board/FlightsBoard';
import { getFlightsList } from '../../gateway/flights.actions';
import { sortedFlightsListSelector } from '../../gateway/flights.selectors';
import { searchFlifhtFilter } from '../../utils/dataUtils';

const Board = () => {
  const flightsList = useSelector(state => sortedFlightsListSelector(state), shallowEqual);
  const dispatch = useDispatch()

  let location = useLocation();
  let { airplaneAction } = useParams();

  const searchFlifht = qs.parse(location.search, { ignoreQueryPrefix: true }).search;
  const newFlightsList = searchFlifhtFilter(flightsList, searchFlifht)

  useEffect(() => {
    const searchDate = qs.parse(location.search, { ignoreQueryPrefix: true });
    const date = searchDate.date
      ? searchDate.date
      : moment().format("DD-MM-YYYY")
    
    dispatch(getFlightsList(airplaneAction, date));
  }, [location]);

  if (flightsList.length === 0) {
    return null;
  }

  return (
      <table>
        <thead>
          <tr>
            <th>Terminal</th>
            <th>Local time</th>
            <th>Destination</th>
            <th>Status</th>
            <th>Airline</th>
            <th>Flight</th>
          </tr>
        </thead>
        <tbody>
          { 
            newFlightsList.length === 0
              ? <tr><th className="no-flights" colSpan="6">No flights</th></tr>
              : newFlightsList.map(flight => (
                  <FlightsBoard key={flight.id} {...flight} airplaneAction={airplaneAction} />
                ))
          }
        </tbody>
      </table>
  );
};

export default Board;
