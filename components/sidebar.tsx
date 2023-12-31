"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/app/page.module.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
// import ReactDOM from "react-dom";
// import { faDashboard, faTruckDroplet } from "@fortawesome/free-solid-svg-icons";
// import { faChartLine } from "@fortawesome/free-solid-svg-icons";
// import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import graph from "@/icons/statistique1.png";
import Image from "next/image";
import pmpst from "@/icons/icons8-exposant-96.png";
import buy from "@/icons/buy.png";
import Dashboard from "@/icons/dashboard-layout.png";
import gasIndex from "@/icons/carburant.png";
import logout from "@/icons/logout.png";
import { useStationURL} from "@/context/IdStationURL";
import React from 'react';



function sidebar() {
   const {IdStationURL,setIdStationURL}=useStationURL();
   

  
  return (
    <div className="col-auto  col-xl-0 px-sm-2 px-0  " style={{background:"#17141D"}}>
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <ul
          className="nav nav-pills flex-column mb-sm-auto  align-items-center align-items-sm-start vh-100"
          style={{ width: "118%", marginLeft: "-9%" }}
          id="menu"
        >
          <Link href={`/home/${IdStationURL}`}  className={`${styles.li} ${styles.aHerf}`}>
            <li >
            
              <Image className={styles.iconSidebar} src={Dashboard} alt={""}   />
              <span className="ml-3 ms-1 d-none d-sm-inline">
                tableau de bord
              </span>
            </li>
          </Link>
          <Link href="/pages/pompist" className={`${styles.li} ${styles.aHerf}`}>
            <li >
              <Image className={styles.iconSidebar} src={pmpst} alt={""} />
              <span className="ml-3 ms-1 d-none d-sm-inline">Pompist</span>
            </li>
          </Link>
          <Link href="/pages/achat" className={`${styles.li} ${styles.aHerf}`}>
            <li >
             
              <Image className={styles.iconSidebar} src={buy} alt={""} />
              <span className="ml-3 ms-1 d-none d-sm-inline">Achat</span>
            </li>
          </Link>
          {/* <Link href="/pages/indexSST" className={`${styles.li} ${styles.aHerf}`}>
            <li >
              
              <Image className={styles.iconSidebar} src={gasIndex} alt={""}  />
              <span className="ml-3 ms-1 d-none d-sm-inline">Index</span>
            </li>
          </Link> */}
          <Link href="/pages/statistique" className={`${styles.li} ${styles.aHerf}`}>
            <li>
              
              <Image className={styles.iconSidebar} src={graph} alt={""}  />

              <span className="ml-3 ms-1 d-none d-sm-inline">statistique</span>
            </li>
          </Link>
          <Link href="/station" className={`${styles.li} ${styles.aHerf} `} style={{marginTop:"130%"}}>
            <li  >
               <Image className={styles.iconSidebar} src={gasIndex} alt={""}  />
              <span className="ml-3 ms-1 d-none d-sm-inline">Stations</span>
            </li>
          </Link>
          <Link href="/"  className={`${styles.li} ${styles.aHerf}`} style={{marginTop:"10%"}}>
            <li >
              <Image className={styles.iconSidebar} src={logout} alt={""}  />
              {/* <i className="bi bi-box-arrow-left"></i> */}
              <span className="ml-3 ms-1 d-none d-sm-inline">Logout</span>
            </li>
          </Link>
          </ul>
      
      </div>
    </div>
  );
}
export default sidebar;

