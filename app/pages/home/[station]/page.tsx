"use client";
import styles from "/app/page.module.css";
import React, { useEffect, useRef, useState } from "react";
import Cuve from "@/components/Cuve";
import axios from "axios";
import Link from "next/link";
import Station from "@/app/station/page";

// import { log } from "console";


function Home( {params}) {

  
const [values, setValues] = useState({
  IDStation:params.station,

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
      <div className={styles.body}>
        <div className={styles.Content}>
          <div className={styles.wrapper}>
              {data.map((cuve, index) => (
                <Cuve
                  id={cuve["cuve_id"]}
                  title={cuve["libelle"]}
                  type={cuve["type_carburant"]}
                  percentage={cuve["Pourcentage"]}
                  wifi={3}
                  notification={0}
                  color_={cuve["type_carburant"]} 
                  Qte={cuve["Qte"]}                  
                   />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
