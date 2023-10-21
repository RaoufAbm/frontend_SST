"use client"; // Add this line if you're using Vercel or other serverless platforms

// import React, { createContext, useContext, useState, useEffect } from "react";

// type IdCuveProvidersProps = {
//     children: React.ReactNode;
// };

// type ThemeContext = {
//     IdCuveURL: number;
//     setIdCuveURL: React.Dispatch<React.SetStateAction<number>>;
// };

// export const CuveURL = createContext<ThemeContext | null>(null);

// export default function IdCuveProvider({
//     children,
// }: IdCuveProvidersProps) {
//     const [IdCuveURL, setIdCuveURL] = useState<number>(() => {
//         if (typeof window !== "undefined") {
//             const storedValue = localStorage.getItem("IdCuveURL");
//             return storedValue ? parseInt(storedValue, 10) : 0;
//         }
//         return 0; // Default value when localStorage is not available (server-side).
//     });

//     useEffect(() => {
//         if (typeof window !== "undefined") {
//             localStorage.setItem("IdCuveURL", IdCuveURL.toString());
//         }
//     }, [IdCuveURL]);

//     return (
//         <CuveURL.Provider value={{ IdCuveURL, setIdCuveURL }}>
//             {children}
//         </CuveURL.Provider>
//     );
// }

// export function useCuveURL() {
//     const context = useContext(CuveURL);
//     if (!context) {
//         throw new Error("useCuveURL must be used within an IdCuveProvider");
//     }
//     return context;
// }
import React, { createContext, useContext, useState, useEffect } from "react";

type IdCuveProvidersProps = {
  children: React.ReactNode;
};

type ThemeContext = {
  IdCuveURL: {
    num: number;
    title: string;
  };
  setIdCuveURL: React.Dispatch<React.SetStateAction<{
    num: number;
    title: string;
  }>>;
};

export const CuveURL = createContext<ThemeContext | null>(null);

export default function IdCuveProvider({
  children,
}: IdCuveProvidersProps) {
  const [IdCuveURL, setIdCuveURL] = useState<{
    num: number;
    title: string;
  }>(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem("IdCuveURL");
      return storedValue
        ? JSON.parse(storedValue)
        : { num: 0, title: "" };
    }
    return { num: 0, title: "" }; // Default value when localStorage is not available (server-side).
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("IdCuveURL", JSON.stringify(IdCuveURL));
    }
  }, [IdCuveURL]);

  return (
    <CuveURL.Provider value={{ IdCuveURL, setIdCuveURL }}>
      {children}
    </CuveURL.Provider>
  );
}

export function useCuveURL() {
  const context = useContext(CuveURL);
  if (!context) {
    throw new Error("useCuveURL must be used within an IdCuveProvider");
  }
  return context;
}
