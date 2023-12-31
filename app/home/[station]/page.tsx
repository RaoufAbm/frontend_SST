"use client";
import styles from "/app/page.module.css";
import React, { useEffect, useRef, useState } from "react";
import Cuve from "@/components/cuve";
import axios from "axios";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { useStationURL} from "@/context/IdStationURL";
import IdCuveProvider from "@/context/idCuveURL";


// import { log } from "console";

function Home() {
  const {IdStationURL,setIdStationURL}=useStationURL();

  const [values, setValues] = useState({
    IDStation:IdStationURL,
    
  });

  
  
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.post(`http://cdd.dzkimtech.com/api/Cuves`,values)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const notif = {
    a:"1",
    b:"1",
    c:"1"

  }
  return (
    <div className={styles.main}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.body}>
      <div className={styles.SideBar}>
          <Sidebar />
        </div>
        <IdCuveProvider>
        <div className={styles.Content}>
          <div className={styles.wrapper}>
              {data.map((cuve, index) => (
                <Cuve
                key={cuve["cuve_id"]} // Add a unique "key" prop
                  id={cuve["cuve_id"]}
                  title={cuve["libelle"]}
                  type={cuve["type_carburant"]}
                  percentage={cuve["Pourcentage"]}
                  wifi={3}
                  notification={0}
                  color_={cuve["type_carburant"]}
                  Qte={cuve["dbo.mesure_cuves"][0]?.["Qte"] || 0}
                  Capacity={cuve["volume_cuve"]}  
                                  />
              ))}
          </div>
        </div>.      
          </IdCuveProvider>

      </div>
    </div>
  );
}
export default Home;
