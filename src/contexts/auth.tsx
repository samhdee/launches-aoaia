import { createContext } from 'react';

const defaultState: AuthProps = {
    isLoggedIn: false,
    setLoggedIn: () => {},
    isEditing: false,
    setEditing: () => {},
    birthdate: null,
    setBirthdate: () => {},
    formattedBirthdate: '',
    setFormattedBirthdate: () => {},
    favourites: null,
    setFavourites: () => {},
};

const AuthContext = createContext<AuthProps>(defaultState);
export default AuthContext;
