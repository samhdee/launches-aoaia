import { createContext } from 'react';

const defaultState: LaunchesProps = {
    isEmpty: true,
    setEmpty: () => {},
    list: null,
    setList: () => {},
};

const AuthContext = createContext<LaunchesProps>(defaultState);
export default AuthContext;
