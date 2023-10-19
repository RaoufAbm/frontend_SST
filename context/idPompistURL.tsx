"use client"

import React, { createContext, useContext, useState } from "react";

type ThemeContextProvidersProps = {
    children: React.ReactNode;
};

type ThemeContext = {
    IdPompistURL: number;
    setIdPompistURL: React.Dispatch<React.SetStateAction<number>>; // Use the correct type for setId
};

export const PompistURL = createContext<ThemeContext | null>(null);

export default function ThemeContextProvider({
    children,
}: ThemeContextProvidersProps) {
    const [IdPompistURL, setIdPompistURL] = useState<number>(1); // Initialize the 'id' state

    return (
        <PompistURL.Provider value={{ IdPompistURL, setIdPompistURL }}>
            {children}
        </PompistURL.Provider>
    );
}

export function usePompistURL() {
    const context = useContext(PompistURL);
    if (!context) {
        throw new Error("useThemeContext must be used within a ThemeContextProvider");
    }
    return context;
}
