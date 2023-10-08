"use client";
import Carburant from "@/components/Carburant";
import styles from "/app/page.module.css";
import React from "react";


function indexSST() {
  return (
    <div className={styles.main}>
      <div className={styles.body}>
        <div className={styles.Content}>
          {/* <h1 className={styles.DevlEncour}>Développement en cours ..</h1>
          <div className={styles.alert}></div> */}
          <div className={styles.grid}>
            <Carburant NameCarb="carburant 1 "  />
            <Carburant NameCarb="carburant 2 "  />
            <Carburant NameCarb="carburant 3 "  />
          
          </div>
        </div>
      </div>
    </div>
  );
}
export default indexSST;
