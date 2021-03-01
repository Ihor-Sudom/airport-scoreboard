import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import moment from 'moment';
import qs from 'qs';
import './dateBoard.scss';

const DateBoard = () => {
  const location = useLocation();
  const history = useHistory();

  const dateSearch = qs.parse(location.search, { ignoreQueryPrefix: true }).date;
  const boardDate = dateSearch
    ? moment(dateSearch.split('-').reverse().join('')).format('DD/MM')
    : moment().format('DD/MM');

  const yesterdayDate = moment(new Date(new Date().setDate(new Date().getDate() - 1))).format('DD/MM');
  const todayDate = moment().format('DD/MM');
  const tomorrowDate = moment(new Date(new Date().setDate(new Date().getDate() + 1))).format('DD/MM');

  const handleDateSelected = number => {
    const selectedDate = new Date(new Date().setDate(new Date().getDate() + number));
    const selectedDateFormat = moment(selectedDate).format('DD-MM-YYYY');

    const pathname = location.pathname + '?';
    const dataQuery = {
      ...qs.parse(location.search, { ignoreQueryPrefix: true }),
      date: selectedDateFormat,
    };

    const queryString = qs.stringify(dataQuery);
    history.push(`${pathname}${queryString}`);
  };

  return (
    <div className="calendar-board">
      <i className="far fa-calendar-alt calendar-board__icon" />
      <div
        className={boardDate == yesterdayDate ? 'calendar-board__day active-day' : 'calendar-board__day'}
        onClick={() => handleDateSelected(-1)}
      >
        <span className="calendar-board__day_date">{yesterdayDate}</span>
        <span className="calendar-board__day_text">yesterday</span>
      </div>
      <div
        className={boardDate == todayDate ? 'calendar-board__day active-day' : 'calendar-board__day'}
        onClick={() => handleDateSelected(0)}
      >
        <span className="calendar-board__day_date">{todayDate}</span>
        <span className="calendar-board__day_text">today</span>
      </div>
      <div
        className={boardDate == tomorrowDate ? 'calendar-board__day active-day' : 'calendar-board__day'}
        onClick={() => handleDateSelected(1)}
      >
        <span className="calendar-board__day_date">{tomorrowDate}</span>
        <span className="calendar-board__day_text">tomorrow</span>
      </div>
    </div>
  );
};

export default DateBoard;
