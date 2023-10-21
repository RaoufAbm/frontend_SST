"use client"
import React, { createContext, useContext, useState, useEffect } from "react";

type DataUserProvidersProps = {
  children: React.ReactNode;
};

type ThemeContext = {
  DataUser:[ {
    IDCompte: number;
    Nom: string;
    Prenom: string;
    chaineDroits: string | null;
    IDStation: number;
    IDClients: number;
  }];
  setDataUser: React.Dispatch<React.SetStateAction<[{
    IDCompte: number;
    Nom: string;
    Prenom: string;
    chaineDroits: string | null;
    IDStation: number;
    IDClients: number;
  }]>>;
};

export const Data = createContext<ThemeContext | null>(null);

export default function DataUserProvider({
  children,
}: DataUserProvidersProps) {
  const [DataUser, setDataUser] = useState<ThemeContext["DataUser"]>(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem("DataUser");
      return storedValue
        ? JSON.parse(storedValue)
        : [{
            IDCompte: 0,
            Nom: "",
            Prenom: "",
            chaineDroits: null,
            IDStation: 0,
            IDClients: 0,
          }];
    }
    return [{
      IDCompte: 0,
      Nom: "",
      Prenom: "",
      chaineDroits: null,
      IDStation: 0,
      IDClients: 0,
    }]; // Default value when localStorage is not available (server-side).
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("DataUser", JSON.stringify(DataUser));
    }
  }, [DataUser]);

  return (
    <Data.Provider value={{ DataUser, setDataUser }}>
      {children}
    </Data.Provider>
  );
}

export function useData() {
  const context = useContext(Data);
  if (!context) {
    throw new Error("useCuveURL must be used within an DataUserProvider");
  }
  return context;
}
