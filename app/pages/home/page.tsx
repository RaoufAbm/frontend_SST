"use client";
import Sidebar from "@/components/sidebar";
import styles from "/app/page.module.css";
import Navbar from "@/components/navbar";
import React, { useEffect, useRef, useState } from "react";
import Cuve from "@/components/cuve";
import axios from "axios";
import { log } from "console";
import Link from "next/link";

function home() {
//  const [data,setData]=useState([])
//  useEffect(()=> {
//   axios.get('http://localhost:5000/??')
//   .then(res=> console.log(res))
//   .catch(err=> console.log(err));
//  },[])

  return (
    <div className={styles.main}>
     

      <div className={styles.body}>
    
        <div className={styles.content}>
          <div className={styles.wrapper}>
            
          {/* <Link href="/indexSST"  className={styles.aHerf}>
          { data.map((cuve ,index ) => {
       return  <Cuve title={cuve.type_carburant}  Capacity={cuve.volume_cuve} Qte={cuve.} percentage={cuve.} color_={cuve.} />
      })}
       </ Link>  */}
       <Link href="/pages/indexSST"  className={styles.aHerf}> <Cuve title="Diesel 01ghgfghfg"  Capacity="50000" Qte="14000" percentage="75"  color_="blue" /> </ Link>
       <Link href="/pages/indexSST"  className={styles.aHerf}> <Cuve title="Essence" Capacity="50000" Qte="7000"  percentage="49"  color_="orange"/> </ Link>
       <Link href="/pages/indexSST"  className={styles.aHerf}> <Cuve title="Diesel"  Capacity="60000" Qte="0"     percentage="9"   color_="red"/> </ Link> 
       
          </div>
        </div>
      </div>
    </div>
  );
}
export default home;
