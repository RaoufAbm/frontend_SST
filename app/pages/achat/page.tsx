"use client";
import styles from "/app/page.module.css";
import React from "react";
import info from "@/images/alert.png";
import Image from "next/image";

function achat() {


  return (
    
        <>
        <h1 className={styles.DevlEncour}>En cours de développement ...</h1>
        <Image src={info} alt={""} width={200} height={200}  />
    </>
  );
}
export default achat;
