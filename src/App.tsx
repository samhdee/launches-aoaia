import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./app/home";
import Header from "./blocks/header";

import "./assets/scss/app.scss";

function App() {
    return (
        <Router>
            <main className="app-wrapper">
                <Header />

                <Route path="/" component={Home} />
                <Route path="/see-launches" component={Home} />
            </main>
        </Router>
    );
}

export default App;
