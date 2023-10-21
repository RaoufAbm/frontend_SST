"use client"; 
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import TableCarburant from "@/components/table_carburant";
import styles from "/app/page.module.css";
import { useCuveURL } from "@/context/idCuveURL";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { IdCuveURL } = useCuveURL();

  return (
   
        
<>
<TableCarburant idCuve={IdCuveURL.num} titleCuve={IdCuveURL.title}  />

             <div className={styles.ventContent}>
          
        {children}
  </div>
</>

       
     
  );
}

