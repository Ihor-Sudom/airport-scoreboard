import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Search from '../search/Search';
import Board from '../board/Board';
import DateBoard from '../date-doard/DateBoard';
import './searchPage.scss';

const SearchPage = () => {
  const location = useLocation();

  const stylesDepartures = location.pathname === '/departures' ? 'switch-scoreboards__btn_active' : '';
  const stylesArrivals = location.pathname === '/arrivals' ? 'switch-scoreboards__btn_active' : '';

  return (
    <>
      <Search />
      <section className="flights-scoreboards">
        <div className="switch-scoreboards">
          <Link
            to={`/departures${location.search}`}
            className={`switch-scoreboards__btn switch-scoreboards__btn_departures ${stylesDepartures}`}
          >
            <i className="fas fa-plane-departure switch-scoreboards__btn_icon"></i>
            Departures
          </Link>
          <Link
            to={`/arrivals${location.search}`}
            className={`switch-scoreboards__btn switch-scoreboards__btn_arrivals ${stylesArrivals}`}
          >
            <i className="fas fa-plane-arrival switch-scoreboards__btn_icon"></i>
            Arrivals
          </Link>
        </div>
        <DateBoard />
        <Switch>
          <Route path="/:airplaneAction">
            <Board />
          </Route>
        </Switch>
      </section>
    </>
  );
};

export default SearchPage;
