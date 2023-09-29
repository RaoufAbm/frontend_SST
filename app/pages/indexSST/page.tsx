"use client";
import Carburant from "@/components/carburant";
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
            <Carburant NameCarb="gfd "  />
            <Carburant NameCarb="fg "  />
            <Carburant NameCarb="Diegfdgsel "  />
            <Carburant NameCarb="g "  />
            <Carburant NameCarb="g "  />
          </div>
        </div>
      </div>
    </div>
  );
}
export default indexSST;
