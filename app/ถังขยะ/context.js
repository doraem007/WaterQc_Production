'use client'

import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
    const [stationId, setStationId] = useState(1);

    return (
        <AppContext.Provider value={{ stationId, setStationId }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
