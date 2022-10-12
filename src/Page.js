import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Authentication from './Authentication';
import './style.css';
import Dashboard from './Dashboard';
import UserFullDetails from './UserFullDetails'

function Page() {
  return (
    <Router>
          <div>
        <Switch>

        <Route exact path="/">
        <Authentication />
        </Route>
        <Route path="/Dashboard">
        <Dashboard />
        </Route>
        <Route path="/UserFullDetails">
        <UserFullDetails />
        </Route>
        

        </Switch>
        </div>
  </Router>
  );
}

export default Page;
