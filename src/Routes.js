import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Header from "./components/Header/Header";
import Dashboard from './components/User/Dashboard'
import AboutForm from "./components/User/AboutForm";
import EventForm from "./components/User/EventForm";
import MixtapeForm from "./components/User/MixtapeForm";

class Routes extends Component {
    render() {
        const loggedIn = false;
        return (
            <Router>
                <div>
                    <Switch>
                        {loggedIn === false && (
                            <Header>
                                <Route path="/" exact component={App} />
                            </Header>
                        )}

                        {loggedIn === true && (
                            <div>
                            <Route exact path="/" component={Dashboard} />
                            <Route exact path="/add/about" component={AboutForm}/>
                            <Route exact path="/add/event" component={EventForm}/>
                            <Route exact path="/add/mixtape" component={MixtapeForm}/>
                            </div>
                        )}
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Routes;
