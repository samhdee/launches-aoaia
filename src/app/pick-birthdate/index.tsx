import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import DatePicker, { registerLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";
import format from "date-fns/format";

import "react-datepicker/dist/react-datepicker.css";

const PickBirthdate: React.FC = () => {
    const birthdate = localStorage.getItem('birthdate');
    let birthdateTimestamp = null;

    if (birthdate) {
        birthdateTimestamp = Date.parse(birthdate);
    }

    const [date, setDate] = useState<Date | null>(birthdateTimestamp ? new Date(birthdateTimestamp) : null);
    registerLocale('fr', fr);

    const handleEdit = (e: any) => {
        setDate(null);
    }

    const handleChange = (date: Date | null) => {
        setDate(date);
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        const pickedDate:any = date;

        if (pickedDate instanceof Date) {
            localStorage.setItem("birthdate", pickedDate.toISOString());
            return <Redirect to="/see-launches" />;
        }
    };

    if (date) {
        return (
            <section>
                <p>{format(date, "dd/MM/yyyy")}</p>
                <button onClick={handleEdit}>Changer</button>
            </section>
        );
    }

    return (
        <section>
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
