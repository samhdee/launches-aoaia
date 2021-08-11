import React, { useState, useEffect, useContext } from "react";

import AuthContext from "../../contexts/auth";
import Launches from "../../services/launches";

import LaunchesList from "./launches-list";

import "../../assets/scss/launches.scss";

const SeeLaunches: React.FC = () => {
    const [isLoading, setLoading] = useState(true);
    const [filters, setFilters] = useState(null);
    const [results, setResults] = useState([]);
    const [count, setCount] = useState(0);
    const [error, setError] = useState(false);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        const launches = new Launches();

        if (isLoading && authContext.birthdate instanceof Date) {
            launches.getFromBirthdate(authContext.birthdate)
                .then(response => {
                    setLoading(false);

                    if (response.data.count > 0) {
                        setResults(response.data.results);
                        setCount(response.data.count);
                    }
                }).catch(error => {
                    console.error(error);
                    setError(true);
                });
        }
    }, [isLoading, authContext.birthdate]);

    return (
        <section id="launches-list-wrapper">
            <h1>Lancements</h1>

            {!isLoading && <p>Résultats : {count}</p>}

            {results.map((item, index) => {
                return <LaunchesList key={index} launch={item} />
            })}
        </section>
    );
};

export default SeeLaunches;