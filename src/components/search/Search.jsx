import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import qs from 'qs';
import './search.scss';

const Search = () => {
  const location = useLocation();
  const history = useHistory();

  const [inputValue, setInputValue] = useState({
    data: '',
    dataSerch: qs.parse(location.search, { ignoreQueryPrefix: true }).search,
  });

  const handleSearch = (event) => {
    event.preventDefault();

    const pathname = '/departures?';
    const dataQuery = {
      ...qs.parse(location.search, { ignoreQueryPrefix: true }),
      search: inputValue.data,
    };

    if (!inputValue.data) {
      delete dataQuery.search;
    };
    
    const queryString = qs.stringify(dataQuery);
    history.push(`${pathname}${queryString}`);
  };

  return (
    <div className="search">
      <h2 className="search__title">SEARCH FLIGHT</h2>
      <div className="search-field">
        <i className="fas fa-search search-field__icon"></i>
        <form 
          className="search-field__form" 
          onSubmit={handleSearch}
        >
          <input
            className="search-field__input"
            type="text"
            placeholder="Airline, destination or flight #"
            value={inputValue.dataSerch || inputValue.data}
            onChange={(e) => setInputValue({...inputValue, data: e.target.value, dataSerch: e.target.value})}
          />
          <button 
            className="search-field__btn" 
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;