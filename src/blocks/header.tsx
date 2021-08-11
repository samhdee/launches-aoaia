import React, { useContext, Fragment } from "react";
import { useLocation, Link } from "react-router-dom";

import AuthContext from "../contexts/auth";

import "../assets/scss/header.scss";

export default function Header() {
    let location = useLocation();
    const authContext = useContext(AuthContext);
    const editBirthdate = () => {};

    const logout = () => {
        localStorage.clear();
        authContext.setLoggedIn(false);
        authContext.setBirthdate(null);
        authContext.setFavourites(null);
    };

    return (
        <header className="app-header">
            {authContext.isLoggedIn &&
                <div id="header-wrapper">
                    {location.pathname !== "/" &&
                        <div id="birthdate-info">
                            {authContext.formattedBirthdate}
                            <button id="edit-birthdate" onClick={editBirthdate}>Modifier</button>
                        </div>
                    }

                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>

                            <li>
                                <Link to="/see-launches">Voir les lancements</Link>
                            </li>

                            <li>
                                <button onClick={logout}>Logout</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            }
        </header>
    );
}
