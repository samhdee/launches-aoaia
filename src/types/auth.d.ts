interface AuthProps {
    isLoggedIn: boolean;
    setLoggedIn: (boolean) => void;
    isEditing: boolean;
    setEditing: (boolean) => void;
    birthdate: Date | null;
    setBirthdate: (Date) => void;
    formattedBirthdate: string;
    setFormattedBirthdate: (string) => void;
    favourites: Array | null;
    setFavourites: (Array) => void;
}
