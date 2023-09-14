
"use client"; // This is a client component 👈🏽

import Cards from "@/components/cards";
import Header from "@/components/header";
import styles from "/app/page.module.css";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import axios from "axios";

// import { Margarine } from "next/font/google";
import Link from "next/link";
import { log } from "console";


function station() {
  const [values, setValues] = useState({
    IDClien: "1",
    
  });

  const [data,setData]=useState([])
  useEffect(()=> {
   axios.post('http://localhost:5000/station',values)
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
    
     
      <div className=' d-flex justify-content-start  pl-5 align-items-stretch flex-wrap row bg-transparent text-decoration-none'  style={{marginTop:"-8%"  }}  >
 

      <Link href="/home"  className={styles.aHerf}>
     { data.map((user ,index ) => {
       return <Cards key={index} title={user.Libelle}  cors={user.Lieu}/>
      })}  
     </ Link> 
      {/* <Link href="/home" style={{textDecoration:"none"}} ><Cards title="station 2" cors="arzio"  /></Link> */}
     
    
       </div>
    </div>
  );
}

export default station;
