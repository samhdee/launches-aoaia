import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Header from "./blocks/header";
import PickBirthdate from "./app/pick-birthdate";
import SeeLaunches from "./app/pick-birthdate";

import "./assets/scss/app.scss";

const App: React.FC = () => {
    return (
        <Router>
            <main className="app-wrapper">
                <Header />

                <Switch>
                    <Route exact path="/" component={PickBirthdate} />
                    <Route exact path="/see-launches" component={SeeLaunches} />
                    <Route component={NotFound} />
                </Switch>
            </main>
        </Router>
    );
}

const NotFound: React.FC = () => {
    const birthdate = localStorage.getItem('birthdate');

    if (birthdate) {
        return <Redirect to="/see-launches" />
    } else {
        return <Redirect to="/" />
    }
}

export default App;
