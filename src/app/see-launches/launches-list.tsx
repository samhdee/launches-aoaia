import React from "react";
import format from "date-fns/format"

const LaunchesList: React.FC<{launch: LaunchProps}> = ({ launch }) => {
    return (
        <section className="launch-tile">
            <h2>
                <time dateTime={launch.net}>{format(new Date(launch.net), "dd/MM/yyyy")}</time>
            </h2>

            <p>{launch.name} - {launch.status.name}</p>
        </section>
    );
}

export default LaunchesList;
