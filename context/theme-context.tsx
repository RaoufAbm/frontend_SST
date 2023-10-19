"use client"

import React, { createContext, useContext, useState } from "react";

type ThemeContextProvidersProps = {
    children: React.ReactNode;
};

type ThemeContext = {
    IdStationURL: number;
    setIdStationURL: React.Dispatch<React.SetStateAction<number>>; // Use the correct type for setId
};

export const ThemeContext = createContext<ThemeContext | null>(null);

export default function ThemeContextProvider({
    children,
}: ThemeContextProvidersProps) {
    const [IdStationURL, setIdStationURL] = useState<number>(1); // Initialize the 'id' state

    return (
        <ThemeContext.Provider value={{ IdStationURL, setIdStationURL }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useThemeContext() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useThemeContext must be used within a ThemeContextProvider");
    }
    return context;
}
