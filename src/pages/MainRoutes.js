import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import Home from './Home';
import About from './About'
import Navbar from "./Navbar";
import Error from "./Error";
import Login from "../modules/login/pages/Login";
import Programs from "../modules/program/pages/Programs";
import {useSelector} from "react-redux";

const ReactRouterSetup = () => {
    const {user} = useSelector((store) => store.login.data);

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route exact path="/">
                    {!!user ? <Redirect to="/home" /> : <Login />}
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