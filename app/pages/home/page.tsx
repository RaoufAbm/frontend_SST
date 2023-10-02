"use client";
import styles from "/app/page.module.css";
import React, { useEffect, useRef, useState } from "react";
import Cuve from "@/components/cuve";
import axios from "axios";
import Link from "next/link";
import { useParams } from "react-router-dom";

// import { log } from "console";


function home() {
//   const params = useParams();
// console.log(params);

const [values, setValues] = useState({
  // IDStation:router.query,
  IDStation:"1",
  
});
  
  
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.post("http://cdd.dzkimtech.com/api/Cuves",values)
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
                <Link href="/pages/indexSST" className={styles.aHerf}>
                <Cuve
                  key={index}
                  title={cuve["libelle"]}
                  type={cuve["type_carburant"]}
                  Capacity={cuve["volume_cuve"]}
                  Qte={"10500"}
                  percentage={cuve["Pourcentage"]}
                  color_={cuve["type_carburant"]}
                  notification={notif}  
                  wifi="1"
                  battery="77"
                />
            </Link>
              ))}

            {/* <Cuve title="Diesel"  Capacity="50000" Qte="14000" percentage="75" color_="blue"   notification={notif}  wifi="1" battery="77"/> */}
            {/* <Cuve title="Essence"  Capacity="50000" Qte="7000"  percentage="49"   color_="orange" notification={notif}  wifi="2" battery="80"/> */}
            {/* <Cuve title="Diesel"   Capacity="60000" Qte="0"     percentage="4"   color_="red"    notification={notif}  wifi="3" battery="20"/>  */}
            {/* <Cuve title="Diesel"   Capacity="60000" Qte="0"     percentage="4"   color_="red"    notification={notif}  wifi="3" battery="20"/>  */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default home;
