import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '@pages/Home';
import Movie from '@pages/Movie';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/movie" exact>
        <Redirect to="/" />
      </Route>
      <Route path="/movie/:id" component={Movie} />
    </Switch>
  );
};

export default Routes;
