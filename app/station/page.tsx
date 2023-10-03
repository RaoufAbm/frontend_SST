
"use client"; // This is a client component 👈🏽

import Cards from "@/components/cards";
import Header from "@/components/header";
import styles from "/app/page.module.css";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { BrowserRouter, Route,Routes } from "react-router-dom";


// import { Margarine } from "next/font/google";
// import { log } from "console";


function station() {
  const id = 123;
  const [values, setValues] = useState({
    IDClien: "1",
    
  });

  const [data,setData]=useState([])
  useEffect(()=> {
   axios.post('https://cdd.dzkimtech.com/station',values)
   .then(res=> setData(res.data)
   )
   .catch(err=> console.log(err));
  },[])

  return (
    <div className='d-flex col-md-12 row '>
<div className={styles.navbar}>
 
 <Navbar />

 </div>
      <div  className=' col-md-12 '>
      <Header />
    </div>
    
     
      <div className={styles.grid}>
 
{data.map((station, index) => (
  <Link key={index} href={`/pages/home`} className={styles.aHerf}>
  <Cards title={station.Libelle} cors={station.Lieu} />
</Link>
))}     
    
       </div>
    </div>
  );
}

export default station;
