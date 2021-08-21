import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import format from "date-fns/format";

import AuthContext from "./contexts/auth";

import Header from "./blocks/header";
import PickBirthdate from "./app/pick-birthdate";
import SeeLaunches from "./app/see-launches";

import "./assets/scss/app.scss";

const App: React.FC = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [birthdate, setBirthdate] = useState(null);
    const [formattedBirthdate, setFormattedBirthdate] = useState('');
    const [favourites, setFavourites] = useState([]);
    const authContextProps = {
        isLoggedIn, setLoggedIn,
        birthdate, setBirthdate,
        formattedBirthdate, setFormattedBirthdate,
        favourites, setFavourites
    };

    return (
        <AuthContext.Provider value={authContextProps}>
            <Routes />
        </AuthContext.Provider>
    );
}

const Routes: React.FC = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        if (!authContext.isLoggedIn) {
            const storageBirthdate = localStorage.getItem('birthdate');

            if (storageBirthdate) {
                authContext.setBirthdate(new Date(storageBirthdate));
                authContext.setFormattedBirthdate(format(new Date(storageBirthdate), 'dd/MM/yyyy'));
                authContext.setLoggedIn(true);
            }

            const userFavourites = localStorage.getItem('favourites');

            if (userFavourites) {
                authContext.setFavourites(userFavourites);
            }
        }
    }, [authContext]);

    return (
        <Router>
            <main id="app-wrapper">
                <Header />

                <Switch>
                    <Route exact path="/" component={PickBirthdate} />
                    {authContext.isLoggedIn && <Route exact path="/see-launches" component={SeeLaunches} />}
                    <Route component={NotFound} />
                </Switch>
            </main>
        </Router>
    );
}

const NotFound: React.FC = () => {
    const authContext = useContext(AuthContext);

    if (authContext.isLoggedIn) {
        return <Redirect to="/see-launches" />
    } else {
        return <Redirect to="/" />
    }
}

export default App;
