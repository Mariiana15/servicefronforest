import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import history from '../history';
import Home from './home';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter history={history}>
        <div>
          <Routes>
            <Route path="/" exact element={  <Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;