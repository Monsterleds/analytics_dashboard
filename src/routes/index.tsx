import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

const routes: React.FC = () => (
  <Switch>
    <Route component={Dashboard} path="/dashboard" />
  </Switch>
);

export default routes;
