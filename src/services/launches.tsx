import axios from "axios";
import { startOfYear, endOfYear } from "date-fns";

import { API_URL_DEV } from 'config';

export default class Launches
{
    getFromBirthdate(userBirthdate: Date)
    {
        const date = new Date(userBirthdate);

        return axios.get(`${API_URL_DEV}/?`
            + 'window_start__gt=' + startOfYear(date).toISOString()
            + "&window_start__lt=" + endOfYear(date).toISOString()
        );
    }
}