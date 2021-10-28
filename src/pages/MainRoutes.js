import React from 'react';

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import Error from './Error';
import Login from '../modules/login/pages/Login';
import Programs from '../modules/program/pages/Programs';
import Program from '../modules/program/pages/Program';
import UsersPage from '../modules/user/pages/UsersPage';
import Logout from '../modules/logout/Logout';
import ProgramsDrawerPage from './drawer/ProgramsDrawerPage';
import GridProgramsDrawerPage from './drawer/GridProgramDrowerPage';
import useUser from '../modules/user/hooks/useUser';

const ReactRouterSetup = () => {
  const { user } = useUser();

  if (!user) {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/">
            <Redirect to="/login" />
          </Route>

          <Route path="/programs">
            <Redirect to="/login"/>
          </Route>

          <Route path="/program/:id">
            <Redirect to="/login"/>
          </Route>

          <Route path="/users">
            <Redirect to="/login"/>
          </Route>

          <Route path="/logout">
            <Redirect to="/login"/>
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/table">
            <Redirect to="/login"/>
          </Route>

          <Route path="/table2">
            <Redirect to="/login"/>
          </Route>

          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    );
  }

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/login">
          <Redirect to="/home" />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/programs">
          <Programs />
        </Route>

        <Route path="/program/:id">
          <Program />
        </Route>

        <Route path="/users">
          <UsersPage />
        </Route>

        <Route path="/logout">
          <Logout />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/table">
          <ProgramsDrawerPage />
        </Route>

        <Route path="/table2">
          <GridProgramsDrawerPage />
        </Route>

        <Route path="*">
          <Error />
        </Route>

      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
