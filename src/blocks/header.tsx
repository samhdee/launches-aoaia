import React, { useContext, Fragment } from "react";
import { useLocation, Link } from "react-router-dom";

import AuthContext from "../contexts/auth";

import "../assets/scss/header.scss";

export default function Header() {
    let location = useLocation();
    const authContext = useContext(AuthContext);

    const edit = () => {
        localStorage.clear();
        authContext.setLoggedIn(false);
        authContext.setBirthdate(null);
        authContext.setFavourites(null);
    };

    const homeLink = location.pathname !== "/"
        ? <Link to="/">Home</Link>
        : "Home";
    const launcheslink = location.pathname !== "/see-launches"
        ? <Link to="/see-launches">Voir les lancements</Link>
        : "Voir les lancements";

    return (
        <header className="app-header">
            {authContext.isLoggedIn &&
                <div id="header-wrapper">
                    <nav>
                        <ul>
                            <li>
                                {homeLink}
                            </li>

                            <li>
                                {launcheslink}
                            </li>

                            <li>
                            </li>
                        </ul>
                    </nav>

                    {location.pathname !== "/" &&
                        <div id="birthdate-info">
                            {authContext.formattedBirthdate}
                            <button id="edit-birthdate" onClick={edit}>Modifier</button>
                        </div>
                    }
                </div>
            }
        </header>
    );
}
