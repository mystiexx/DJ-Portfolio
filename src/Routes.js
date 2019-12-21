import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Header from "./components/Header/Header";

class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Header>
                            <Route path="/" exact component={App} />
                        </Header>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Routes;
