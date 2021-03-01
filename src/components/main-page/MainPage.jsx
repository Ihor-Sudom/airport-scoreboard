import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../search/Search';
import './mainPage.scss';

const MainPage = () => {
  return(
    <div className="main-page">
      <Search />
      <div className="switch-scoreboards">
          <Link
            to="/departures"
            className="switch-scoreboards__btn-departures"
          >
            <i className="fas fa-plane-departure switch-scoreboards__btn_icon"></i>
            Departures
          </Link>
          <Link
            to="/arrivals"
            className="switch-scoreboards__btn-arrivals"
          >
            <i className="fas fa-plane-arrival switch-scoreboards__btn_icon"></i>
            Arrivals
          </Link>
        </div>
    </div>
  );
};

export default MainPage;