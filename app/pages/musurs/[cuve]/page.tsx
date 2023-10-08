"use client";
import React from 'react'
import styles from "/app/page.module.css";
import TableMusurs from '@/components/TableMusurs';

 function tableCuve({params}) {
  const id=(params.cuve);
  
  return (
    <div className={styles.main}>
    <div className={styles.body}>
      <div className={styles.Content}>
        <TableMusurs IDCuve={id} />
      </div>
    </div>
  </div>
  )
}
export default tableCuve;