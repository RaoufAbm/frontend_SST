"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Pompist = {
  id: number;
  nom: string;
  prenom: string;
  date_de_nessance: string;
  date_de_recretement: string;
  date_de_sortie: string;
  ID_Station: number;
  sup: boolean;
};

type ThemeContext = {
  AllPompist: Pompist[];
  setAllPompist: React.Dispatch<React.SetStateAction<Pompist[]>>;
};

export const DataPompist = createContext<ThemeContext | null>(null);

interface AllPompistProviderProps {
  children: ReactNode; // Specify the type for the children prop
}

export default function AllPompistProvider({
  children,
}: AllPompistProviderProps) {
  const [AllPompist, setAllPompist] = useState<Pompist[]>(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem("AllPompist"); // Use the correct key
      return storedValue ? JSON.parse(storedValue) : []; // Return an empty array if data is not found
    }
    return []; // Default value when localStorage is not available (server-side).
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("AllPompist", JSON.stringify(AllPompist)); // Use the correct key
    }
  }, [AllPompist]);

  return (
    <DataPompist.Provider value={{ AllPompist, setAllPompist }}>
      {children}
    </DataPompist.Provider>
  );
}

export function useDataPompist() {
  const context = useContext(DataPompist);
  if (!context) {
throw new Error("useDataPompist must be used within a DataPompistProvider. Make sure you have wrapped your component tree with <AllPompistProvider> to provide the necessary context.");
   }
  return context;
}
