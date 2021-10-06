import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './Home';
import About from './About'
import Navbar from "./Navbar";
import Error from "./Error";
import Login from "../modules/login/pages/Login";
import Programs from "../modules/program/pages/Programs";

const ReactRouterSetup = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/programs">
                    <Programs />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="*">
                    <Error />
                </Route>
            </Switch>
        </Router>
    );
}

export  default ReactRouterSetup;