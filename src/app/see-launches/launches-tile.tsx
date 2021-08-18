import React from "react";
import format from "date-fns/format"

const LaunchTile: React.FC<{launch: LaunchProps}> = ({ launch }) => {
    return (
        <section className="launch-tile">
            <header>
                <time dateTime={launch.date}>{format(new Date(launch.date), "dd/MM/yyyy")}</time>
            </header>

            <div className="tile-content">
                <div className="launch-info">
                    <h2>{launch.name}</h2>

                    <p>{launch.status}</p>
                </div>

                <div className="launch-image">
                    <img width="150" alt={launch.image.pathname.substring(launch.image.pathname.lastIndexOf('/') + 1)} src={launch.image.pathname} />
                </div>
            </div>
        </section>
    );
}

export default LaunchTile;
