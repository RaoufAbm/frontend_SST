"use client"

import React, { createContext, useContext, useState, useEffect } from "react";

type ThemeContextProvidersProps = {
  children: React.ReactNode;
};

type ThemeContext = {
  IdVentURL: number;
  setIdVentURL: React.Dispatch<React.SetStateAction<number>>; // Use the correct type for setId
};

export const VentURL = createContext<ThemeContext | null>(null);

export default function VentURLProvider({
  children,
}: ThemeContextProvidersProps) {
  // Check if there's a value in localStorage
  const storedIdVentURL = localStorage.getItem("IdVentURL");
  const [IdVentURL, setIdVentURL] = useState<number>(
    storedIdVentURL ? parseInt(storedIdVentURL, 10) : 0
  );

  // Update localStorage when IdVentURL changes
  useEffect(() => {
    localStorage.setItem("IdVentURL", IdVentURL.toString());
  }, [IdVentURL]);

  return (
    <VentURL.Provider value={{ IdVentURL, setIdVentURL }}>
      {children}
    </VentURL.Provider>
  );
}

export function useVentURL() {
  const context = useContext(VentURL);
  if (!context) {
    throw new Error("useVentURL must be used within a VentURLProvider");
  }
  return context;
}
