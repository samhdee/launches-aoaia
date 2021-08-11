import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";

import DatePicker, { registerLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";
import format from "date-fns/format";

import AuthContext from "../../contexts/auth";

import "react-datepicker/dist/react-datepicker.css";

const PickBirthdate: React.FC = () => {
    const authContext = useContext(AuthContext);
    const [date, setDate] = useState<Date | null>(null);
    const [error, setError] = useState('');
    registerLocale('fr', fr);

    useEffect(() => {
        if (authContext.isLoggedIn) {
            setDate(authContext.birthdate);
        } else {
            setDate(null);
        }
    }, [authContext.isLoggedIn, authContext.birthdate]);

    const handleEdit = (e: any) => {
        setDate(null);
        localStorage.clear();
        authContext.setLoggedIn(false);
    }

    const handleChange = (date: Date | null) => {
        setDate(date);
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        const pickedDate:any = date;

        if (pickedDate instanceof Date) {
            localStorage.setItem("birthdate", pickedDate.toISOString());
            authContext.setFormattedBirthdate(format(pickedDate, "dd/MM/yyyy"));
            authContext.setBirthdate(pickedDate);
            authContext.setLoggedIn(true);
            return <Redirect to="/see-launches" />;
        } else {
            setError('Date invalide');
        }
    };

    if (authContext.isLoggedIn) {
        return (
            <section id="pickdate-wrapper">
                <p>{authContext.formattedBirthdate}</p>
                <button onClick={handleEdit}>Changer</button>
            </section>
        );
    }

    return (
        <section id="pickdate-wrapper">
            {error && <p className="error-message">{error}</p>}

            <form onSubmit={handleSubmit}>
                <p>Indiquez votre date de naissance :</p>

                <DatePicker
                    locale="fr"
                    selected={date}
                    onChange={handleChange}
                    isClearable={true}
                    minDate={new Date(1956, 1, 1)}
                    maxDate={new Date()}
                    showYearDropdown
                    yearDropdownItemNumber={15}
                    placeholderText="jj/mm/aaaa"
                    dateFormat="dd/MM/yyyy"
                />

                <input type="submit" value="Valider" />
            </form>
        </section>
    );
}

export default PickBirthdate;
