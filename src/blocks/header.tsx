import React, { useContext } from "react";
import { useLocation } from "react-router-dom";

import AuthContext from "../contexts/auth";

import "../assets/scss/header.scss";

export default function Header() {
    let location = useLocation();
    const authContext = useContext(AuthContext);
    const editBirthdate = () => {};

    switch (location.pathname) {
        case "/":
        default:

            break;
    }

    return (
        <header className="app-header">
            {authContext.isLoggedIn && location.pathname !== "/" &&
                <div>
                    {authContext.formattedBirthdate}
                    <button onClick={editBirthdate}>Modifier</button>
                </div>
            }
        </header>
    );
}
