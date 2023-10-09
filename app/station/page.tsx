"use client"; // This is a client component 👈🏽

import Cards from "@/components/Cards";
import Header from "@/components/header";
import styles from "/app/page.module.css";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

function Station() {
  // Define a state variable for the data fetched from the API
  const [fetchedData, setFetchedData] = useState([]);

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
          <Link key={index} href={`/home/${station["IDStation"]}`} className={styles.aHerf}>
            <Cards  title={station["Libelle"]} cors={station["Lieu"]}  />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Station;
