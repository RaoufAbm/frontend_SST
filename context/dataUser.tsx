"use client"

import React, { createContext, useContext, useState } from "react";

type ThemeContextProvidersProps = {
    children: React.ReactNode;
};

type ThemeContext = {
    DataUser: number;
    setDataUser: React.Dispatch<React.SetStateAction<number>>; // Use the correct type for setId
};

export const Data = createContext<ThemeContext | null>(null);

export default function ThemeContextProvider({
    children,
}: ThemeContextProvidersProps) {
    const [DataUser, setDataUser] = useState<number>(0); // Initialize the 'id' state

    return (
        <Data.Provider value={{ DataUser, setDataUser }}>
            {children}
        </Data.Provider>
    );
}

export function useData() {
    const context = useContext(Data);
    if (!context) {
        throw new Error("useThemeContext must be used within a ThemeContextProvider");
    }
    return context;
}
