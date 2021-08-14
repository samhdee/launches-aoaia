import React from "react";
import format from "date-fns/format"

const LaunchesList: React.FC<{launch: LaunchProps}> = ({ launch }) => {
    return (
        <li>
            {format(new Date(launch.net), "dd/MM/yyyy")} : {launch.name} - {launch.status.name}
        </li>
    );
}

export default LaunchesList;
