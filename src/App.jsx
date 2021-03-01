import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from './store';
import SearchPage from './components/search-page/SearchPage';
import MainPage from './components/main-page/MainPage';



const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/:airplaneAction">
            <SearchPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;