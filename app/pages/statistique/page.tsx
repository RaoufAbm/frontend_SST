"use client";
import styles from "/app/page.module.css";
import React from "react";
import info from "@/images/alert.png";
import Image from "next/image";

function statistique() {
  return (
    <div className={styles.main}>
      

      <div className={styles.body}>
     
        <div className={styles.Content}>
        <h1 className={styles.DevlEncour}>En cours de développement ...</h1>
        <Image src={info} alt={""} width={200} height={200}  />
          </div>
      </div>
    </div>
  );
}
export default statistique;
