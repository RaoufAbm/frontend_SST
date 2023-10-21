"use client"
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type ThemeContext = {
    IdVoletURL: number;
    setIdVoletURL: React.Dispatch<React.SetStateAction<number>>;
};

export const IdVolet = createContext<ThemeContext | undefined>(undefined);

export const IdVoletProvider = ({ children }: { children: ReactNode }) => {
    // Check if localStorage is available (only use on the client side)
    const initialIdVoletURL =
        typeof window !== "undefined"
            ? localStorage.getItem("IdVoletURL") || "0"
            : "0";

    const [IdVoletURL, setIdVoletURL] = useState<number>(
        parseInt(initialIdVoletURL, 10)
    );

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("IdVoletURL", IdVoletURL.toString());
        }
    }, [IdVoletURL]);

    return (
        <IdVolet.Provider value={{ IdVoletURL, setIdVoletURL }}>
            {children}
        </IdVolet.Provider>
    );
};

export const useIdVoletURL = () => {
    const context = useContext(IdVolet);
    if (!context) {
        throw new Error("useIdVoletURL must be used within an IdVoletProvider");
    }
    return context;
};
