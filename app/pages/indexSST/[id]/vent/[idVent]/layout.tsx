// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "bootstrap/dist/css/bootstrap.css";
// import TableCarburant from "@/components/table_carburant";

// import styles from "/app/page.module.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {

// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
   
        
// <>

//             <div className={styles.ventContent}>{children}</div>
// </>

       
     
//   );
// }
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import TableCarburant from "@/components/table_carburant";

import styles from "/app/page.module.css";
import Link from "next/link";
import ThemeContextProvider from "@/context/idCuveURL";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {

};

export default function RootLayout({
  children,params
}: {
  children: React.ReactNode;
}) {
  const  ID =  params.id;
  return (
   
        
<>
<TableCarburant idCuve={ID}  />

             <div className={styles.ventContent}>
             <Link href={`/pages/indexSST/${ID}/ajouteVent`}>
            <button type="button" className="btn  btn-success ml-5">
            <i className="bi bi-person-plus"></i> Ajoute
            </button>
          </Link>
          <ThemeContextProvider>
        {children}
     </ThemeContextProvider>
  </div>
</>

       
     
  );
}

