"use client";
import Carburant from "@/components/carburant";
import styles from "/app/page.module.css";
import React from "react";
import TableCarburant from "@/components/table_carburant";

function indexSST() {
  return (
   
        <>
        
          {/* <div className={styles.grid}>
            <Carburant NameCarb="carburant 1 "  />
            <Carburant NameCarb="carburant 2 "  />
            <Carburant NameCarb="carburant 3 "  />
          </div> */}
          <TableCarburant />

      </>
   
  );
}
export default indexSST;
