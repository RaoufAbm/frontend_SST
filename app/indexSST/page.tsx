"use client";
import Sidebar from "@/components/sidebar";
import styles from "/app/page.module.css";
import Navbar from "@/components/navbar";
import React from "react";
import Table from "@/components/table";
import Swal from "sweetalert2";

function indexSST() {
  return (
    <div className={styles.main}>
      <div className={styles.navbar}>
        <Navbar />
      </div>

      <div className={styles.body}>
        <div className={styles.SideBar}>
          <Sidebar />
        </div>
        <div className={styles.content} >
          <h1 className={styles.DevlEncour}>Développement en cours ..</h1>
          <div className={styles.alert}></div>
     
        </div>
      </div>
    </div>
  );
}
export default indexSST;
