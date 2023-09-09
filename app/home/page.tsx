"use client";
import Sidebar from '@/components/sidebar';
import styles from '/app/page.module.css'
import Navbar from '@/components/navbar';
import React from 'react';
import Table from '@/components/table';




function home() {
  return (
    
    <div className={styles.main}>
      
      <div className={styles.navbar}>
 
      <Navbar />

      </div>
    <div className={styles.content}>
      <h1>home</h1>
    <Table/>
    </div>
      <div className={styles.SideBar}>
              <Sidebar/>

    </div>
     
    </div>
  );
}
export default home;
