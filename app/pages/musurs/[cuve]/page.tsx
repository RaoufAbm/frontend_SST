"use client";
import React from 'react'
import styles from "/app/page.module.css";
import Table from '@/components/Table';

 function tableCuve({params}) {
  const id=(params.cuve);
  
  return (
    <div className={styles.main}>
    <div className={styles.body}>
      <div className={styles.Content}>
        <Table IDCuve={id} />
      </div>
    </div>
  </div>
  )
}
export default tableCuve;