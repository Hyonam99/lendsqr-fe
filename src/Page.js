import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Authentication from './Authentication';
import './style.css';
import Dashboard from './Dashboard';
import User_full_details from './User_full_details'

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
        <Route path="/User_full_details">
        <User_full_details />
        </Route>
        

        </Switch>
        </div>
  </Router>
  );
}

export default Page;
