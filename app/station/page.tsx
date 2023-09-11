import Cards from "@/components/cards";
import Header from "@/components/header";
import styles from "/app/page.module.css";
import Navbar from "@/components/navbar";
import { Margarine } from "next/font/google";
import Link from "next/link";


function station() {
  return (
    <div className='d-flex col-md-12 row '>
<div className={styles.navbar}>
 
 <Navbar />

 </div>
      <div  className=' col-md-12 '>
      <Header />
    </div>
    
     
      <div className=' d-flex justify-content-start  pl-5 align-items-stretch flex-wrap row bg-transparent text-decoration-none'  style={{marginTop:"-8%" }}  >
      
      <Link href="/home" style={{textDecoration:"none"}} ><Cards title="station 1" cors="betiwa"  /></Link>
      <Link href="/home" style={{textDecoration:"none"}} ><Cards title="station 2" cors="arzio"  /></Link>
     
    
      </div>
    </div>
  );
}

export default station;
