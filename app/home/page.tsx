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

       <Cuve />
       <Cuve/>
       <Cuve/>
       <Cuve/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default home;
