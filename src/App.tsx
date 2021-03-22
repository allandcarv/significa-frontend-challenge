import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './core/styles';
import Routes from './core/routes';

import { MovieProvider } from './core/context/MovieContext';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <MovieProvider>
        <Routes />
      </MovieProvider>
    </BrowserRouter>
  );
};

export default App;
