import Cards from "@/components/cards";
import Header from "@/components/header";
import styles from "/app/page.module.css";
import Navbar from "@/components/navbar";
import { Margarine } from "next/font/google";


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
     <a className="text-decoration-none" href="/home"><Cards /></a>
     <a className="text-decoration-none" href="/home"><Cards /></a>
     <a className="text-decoration-none" href="/home"><Cards /></a>
     <a className="text-decoration-none" href="/home"><Cards /></a>
     <a className="text-decoration-none" href="/home"><Cards /></a>
     <a className="text-decoration-none" href="/home"><Cards /></a>
     <a className="text-decoration-none" href="/home"><Cards /></a>
     <a className="text-decoration-none" href="/home"><Cards /></a>
     <a className="text-decoration-none" href="/home"><Cards /></a>
     <a className="text-decoration-none" href="/home"><Cards /></a>
     

      </div>
    </div>
  );
}

export default station;
