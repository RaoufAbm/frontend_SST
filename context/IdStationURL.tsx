"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type ThemeContext = {
  IdStationURL: number;
  setIdStationURL: React.Dispatch<React.SetStateAction<number>>;
};

export const StationContext = createContext<ThemeContext | undefined>(undefined);

export const StationProvider = ({ children }: { children: ReactNode }) => {
  const initialIdStationURL = localStorage.getItem("IdStationURL") || "0";
  const [IdStationURL, setIdStationURL] = useState<number>(parseInt(initialIdStationURL, 10));

  useEffect(() => {
    localStorage.setItem("IdStationURL", IdStationURL.toString());
  }, [IdStationURL]);

  return (
    <StationContext.Provider value={{ IdStationURL, setIdStationURL }}>
      {children}
    </StationContext.Provider>
  );
};

export const useStationURL = () => {
  const context = useContext(StationContext);
  if (!context) {
    throw new Error("useStationURL must be used within a StationProvider");
  }
  return context;
};
