"use client";
import Sidebar from "@/components/sidebar";
import styles from "/app/page.module.css";
import Navbar from "@/components/navbar";
import React from "react";
import Table from "@/components/table";

function pompist() {
  return (
    <div className={styles.main}>
      

      <div className={styles.body}>
      
        <div className={styles.Content}>
          <h1 className={styles.DevlEncour}>En cours de développement ...</h1>
          <div className={styles.alert}></div>        </div>
      </div>
    </div>
  );
}
export default pompist;
