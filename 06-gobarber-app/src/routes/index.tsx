import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../Pages/Signin';
import SignUp from '../Pages/Signup';
import Dashboard from '../Pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
};

export default Routes;
