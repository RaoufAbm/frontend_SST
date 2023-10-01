"use client";
import React from 'react'
import styles from "/app/page.module.css";
import Table from '@/components/table';

 function tableCuve() {
  return (
    <div className={styles.main}>
    <div className={styles.body}>
      <div className={styles.Content}>
        <Table />
      </div>
    </div>
  </div>
  )
}
export default tableCuve;