import React, { useEffect, useContext, useState, Fragment } from "react";
import Modal from "react-modal";

import { format, getWeek } from "date-fns"

import AuthContext from "../../contexts/auth";
import LaunchDetails from "./launch-details";

const LaunchTile: React.FC<{ launch: LaunchProps }> = ({ launch }) => {
    const [showModal, setShowModal] = useState(false);

    const imageName = launch.image.substring(launch.image.lastIndexOf('/') + 1);
    const authContext = useContext(AuthContext);
    let tileClassName = "launch-tile";
    let closenessDegree = '';

    if (authContext.birthdate instanceof Date)
        if (authContext.birthdate === launch.net.date) {
            tileClassName += " exact";
        } else if (getWeek(authContext.birthdate) === getWeek(launch.net.date)) {
            tileClassName += " close";
    }

    const showLaunchImage = () => {}

    const showDetails = () => {
        setShowModal(true);
    }

    const hideModal = () => {
        setShowModal(false);
    }

    return (
        <Fragment>
            <section className={tileClassName} onClick={showDetails}>
                <header>
                    <time dateTime={launch.net.isoString}>
                        {format(launch.net.date, "dd/MM/yyyy")}
                    </time>

                    <p
                        className="launch-status {launch.status.slug.toLowerCase()}"
                        title={launch.status.name}
                    >
                        {launch.status.slug}
                    </p>
                </header>

                <div className="launch-info">
                    <h2>{launch.name}</h2>
                </div>
            </section>

            <LaunchDetails isModalOpen={showModal} hideModal={hideModal} launch={launch} />
        </Fragment>
    );
}

export default LaunchTile;
