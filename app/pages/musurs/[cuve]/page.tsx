"use client";
import React from 'react'
import styles from "/app/page.module.css";
import TableMusurs from '@/components/table_musurs';

 function tableCuve({params}) {
  const id=(params.cuve);
  
  return (
    
      <>
        <TableMusurs IDCuve={id} />
      </>
   
  )
}
export default tableCuve;