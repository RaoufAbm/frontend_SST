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
    
      <div className=' d-flex justify-content-start  pl-5 align-items-stretch flex-wrap row bg-transparent' style={{marginTop:"-8%" }}  >
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
    {/* display: flex!important;
     align-content: flex-start; 
     flex-direction: column; 
     justify-content: center; 
    flex-direction: row;
    align-items: baseline;
    flex-wrap: wrap;
    justify-content: start;  */}

      
        
      </div>
    </div>
  );
}

export default station;
