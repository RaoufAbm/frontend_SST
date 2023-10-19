
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";

import styles from "/app/page.module.css";
import ThemeContextProvider from "@/context/idPompistURL";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {

};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
   
        
<>
     <ThemeContextProvider>
        {children}
     </ThemeContextProvider>
</>

       
     
  );
}

