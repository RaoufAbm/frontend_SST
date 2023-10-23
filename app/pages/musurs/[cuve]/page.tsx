"use client";
import React from 'react'
import styles from "/app/page.module.css";
import TableMusurs from '@/components/table_musurs';
import { useCuveURL } from '@/context/idCuveURL';

 function tableCuve() {
  const { IdCuveURL } = useCuveURL(); // Note the parentheses () here

  return (
    
      <>
        <TableMusurs IDCuve={IdCuveURL.num} />
      </>
   
  )
}
export default tableCuve;