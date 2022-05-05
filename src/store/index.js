import React, { useContext } from "react";

export const initialState = {
    logoColor: '#ff0000',
};

const Store = React.createContext();

export const useStore = () => React.useContext(Store);

export const StoreProvider = ({children}) => {
    return <Store.Provider value={initialState}>
        {children}
    </Store.Provider>
}