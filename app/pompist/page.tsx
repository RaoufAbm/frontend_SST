"use client";
import Sidebar from "@/components/sidebar";
import styles from "/app/page.module.css";
import Navbar from "@/components/navbar";
import React from "react";
import Table from "@/components/table";

function pompist() {
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
          <h1>pompist</h1>
          <Table />
        </div>
      </div>
    </div>
  );
}
export default pompist;
