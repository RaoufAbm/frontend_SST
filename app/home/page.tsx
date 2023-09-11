"use client";
import Sidebar from "@/components/sidebar";
import styles from "/app/page.module.css";
import Navbar from "@/components/navbar";
import React, { useRef } from "react";
import Cuve from "@/components/cuve";

function home() {

  return (
    <div className={styles.main}>
      <div className={styles.navbar}>
        <Navbar />
      </div>

      <div className={styles.body}>
        <div className={styles.SideBar}>
          <Sidebar />
        </div>
        <div className={styles.content}>
          <div className={styles.wrapper}>

       <Cuve title="Diesel" Capacite="50000" Qte="14000" percentage="29%" />
       <Cuve title="Essence"Capacite="50000" Qte="7000"  percentage="15%" />
       <Cuve title="Diesel" Capacite="60000" Qte="0"     percentage="0%" />
       <Cuve title="Diesel" Capacite="40000" Qte="14000" percentage="23%" />
       <Cuve title="Essence"Capacite="20000" Qte="5000"  percentage="12%" />
       
          </div>
        </div>
      </div>
    </div>
  );
}
export default home;
