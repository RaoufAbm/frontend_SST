"use client";
import styles from "/app/page.module.css";
import React from "react";
import carburant from "@/images/carburant2.png";
import Image from "next/image";

function indexSST() {
  return (
    <div className={styles.main}>
      <div className={styles.body}>
        <div className={styles.Content} >
          {/* <h1 className={styles.DevlEncour}>Développement en cours ..</h1>
          <div className={styles.alert}></div> */}
<Image src={carburant} alt={""} width={800} height={500}  />
        </div>
      </div>
    </div>
  );
}
export default indexSST;
