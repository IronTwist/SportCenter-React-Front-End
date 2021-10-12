import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import Home from './Home';
import About from './About'
import Navbar from "./Navbar";
import Error from "./Error";
import Login from "../modules/login/pages/Login";
import Programs from "../modules/program/pages/Programs";
import {useSelector} from "react-redux";
import Program from "../modules/program/pages/Program";

const ReactRouterSetup = () => {
    const {user} = useSelector((store) => store.login.data);

    if(!user) {
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
                    <Programs/>
                </Route>

                <Route path="/program/:id">
                    <Program />
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