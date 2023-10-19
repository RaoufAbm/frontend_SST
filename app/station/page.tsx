"use client"; // This is a client component 👈🏽

import Header from "@/components/header";
import styles from "/app/page.module.css";
import Navbar from "@/components/navbar";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Cards from "@/components/cards";
import {StationURL, useStationURL} from "@/context/IdStationURL";

function Station() {
  // Define a state variable for the data fetched from the API
  const [fetchedData, setFetchedData] = useState([]);
  const {IdStationURL,setIdStationURL}=useStationURL();

  useEffect(() => {
    const initialValues = {
      IDClien: "1",
      // Add other initial values as needed
    };

    // Fetch data from the API and update the state
    axios.post('https://cdd.dzkimtech.com/station', initialValues)
      .then((res) => setFetchedData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    // <div className='d-flex col-md-12  p-0 row'>
      <div className="main">
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className='col-md-12'>
        <Header />
      </div>
      <div className={styles.gridS}>
        {fetchedData.map((station, index) => (
          <Link key={index} href={`/home/${station["IDStation"]}`} className={styles.aHerf} onClick={() => setIdStationURL(station["IDStation"])}
          >
            <Cards 
             title={station["Libelle"]}
             cors={station["Lieu"]} 
             
             />
            
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Station;
