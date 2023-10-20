"use client"

import React, { createContext, useContext, useState } from "react";

type ThemeContextProvidersProps = {
    children: React.ReactNode;
};

type ThemeContext = {
    IdCuveURL: number;
    setIdCuveURL: React.Dispatch<React.SetStateAction<number>>; // Use the correct type for setId
};

export const CuveURL = createContext<ThemeContext | null>(null);

export default function ThemeContextProvider({
    children,
}: ThemeContextProvidersProps) {
    const [IdCuveURL, setIdCuveURL] = useState<number>(0); // Initialize the 'id' state

    return (
        <CuveURL.Provider value={{ IdCuveURL, setIdCuveURL }}>
            {children}
        </CuveURL.Provider>
    );
}

export function useCuveURL() {
    const context = useContext(CuveURL);
    if (!context) {
        throw new Error("useThemeContext must be used within a ThemeContextProvider");
    }
    return context;
}
