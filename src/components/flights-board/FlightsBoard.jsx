import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './flightsBoard.scss';
import { formatStatus } from '../../utils/dataUtils';

const FlightsBoard = ({
  terminal,
  flight,
  airlineName,
  airlineAvatar,
  localTime,
  status,
  airplaneAction,
  destination,
}) => {
  const timeFlight = moment(localTime).format('HH:mm');
  const statusFlight = formatStatus(status, airplaneAction);

  return (
    <tr>
      <td>
        <span className={terminal === 'D' ? 'terminal terminal-blue' : 'terminal'}>{terminal}</span>
      </td>
      <td>{timeFlight}</td>
      <td>{destination}</td>
      <td>{statusFlight}</td>
      <td>
        <div className="airline">
          <img className="airline__logo" src={airlineAvatar} />
          <span className="airline__name">{airlineName}</span>
        </div>
      </td>
      <td>{flight}</td>
    </tr>
  );
};

FlightsBoard.propTypes = {
  terminal: PropTypes.string.isRequired,
  flight: PropTypes.string.isRequired,
  airlineName: PropTypes.string.isRequired,
  airlineAvatar: PropTypes.string.isRequired,
  localTime: PropTypes.instanceOf(Date).isRequired,
  status: PropTypes.instanceOf(Date).isRequired,
  airplaneAction: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired
}

export default FlightsBoard;
