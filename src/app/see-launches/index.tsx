import React, { useState, useEffect, useContext } from "react";
import getWeek from "date-fns/getWeek";

import AuthContext from "../../contexts/auth";
import Launches from "../../services/launches";

import LaunchTile from "./launches-tile";

import "../../assets/scss/launches.scss";

const SeeLaunches: React.FC = () => {
    const [isLoading, setLoading] = useState(true);
    const [filters, setFilters] = useState(null);
    const [results, setResults] = useState<Array<LaunchProps>>([]);
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
                        const ajaxResponse: Array<LaunchProps> = [];

                        response.data.results.map((item: any, index: number) => {
                            ajaxResponse.push(formatLaunchInfo(item));
                        });

                        setResults(ajaxResponse);
                        setCount(response.data.count);
                    }
                }).catch(error => {
                    console.error(error);
                    setError(true);
                });
        }
    }, [isLoading, authContext.birthdate]);

    const formatLaunchInfo = (item: any) => {
        return {
            name: item.name,
            net: {
                isoString: item.date,
                date: new Date(item.net),
            },
            image: item.image,
            status: {
                name: item.status.name,
                slug: item.status.abbrev,
                failReason: item.failReason,
            },
            mission: {
                name: item.name,
                description: item.description,
            },
            rocket: item.rocket.configuration.name,
            pad: {
                name: item.pad.name,
                mapImage: item.pad.location.map_image,
                location: item.pad.location.name,
                latitude: item.pad.latitude,
                longitude: item.pad.longitude,
                countryCode: item.pad.location.map_image,
            },
            provider: item.launch_services_provider && {
                name: item.launch_services_provider.name,
                type: item.launch_services_provider.type,
            },
        }
    }

    return (
        <section id="launches-list-wrapper">
            <h1>Lancements</h1>

            {!isLoading && <p>Résultats : {count}</p>}

            {results.map((item, index) => {
                return <LaunchTile key={index} launch={item} />
            })}
        </section>
    );
};

export default SeeLaunches;