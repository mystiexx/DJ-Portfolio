import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Header from "./components/Header/Header";
import Dashboard from "./components/User/Dashboard";
import AboutForm from "./components/User/AboutForm";
import EventForm from "./components/User/EventForm";
import MixtapeForm from "./components/User/MixtapeForm";
import AdminHeader from "./components/Header/AdminHeader";
import AboutPage from "./components/User/AboutPage";
import EventPage from "./components/User/EventPage";
import MixtapePage from "./components/User/MixtapePage";

class Routes extends Component {
    render() {
        const loggedIn = true;
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
                            <AdminHeader>
                                <Route exact path="/" component={Dashboard} />
                                <Route exact path="/add/about" component={AboutForm} />
                                <Route exact path="/add/event" component={EventForm} />
                                <Route exact path="/add/mixtape" component={MixtapeForm} />
                                <Route exact path= '/about' component={AboutPage}/>
                                <Route exact path="/event" component={EventPage}/>
                                <Route exact path="/mixtape" component={MixtapePage}/>
                            </AdminHeader>
                        )}
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Routes;
