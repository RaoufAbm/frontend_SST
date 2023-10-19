"use client";
import Link from "next/link";
import React, { useState, SyntheticEvent } from 'react'; // Import SyntheticEvent
import styles from "/app/page.module.css";
import axios from "axios";
import Swal from "sweetalert2";
import {ThemeContext, useThemeContext} from "@/context/theme-context";

function addUsers() {
  const {IdStationURL,setIdStationURL}=useThemeContext();

    
  const [values, setValues] = useState({
    nom: "",  
    prenom: "", 
    date_de_nessance: "",  
    date_de_recretement: "",  
    date_de_sortie: "",  
    ID_Station: IdStationURL,
  });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: SyntheticEvent) => { // Change to SyntheticEvent
    event.preventDefault();

    axios.post("http://cdd.dzkimtech.com/api/InsrPompist", values)
    .then((res) => {
      if (res.status === 200) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
        }).then(function () {
          window.location.href = "/pages/pompist";
        });
      } else {
        // alert("no existed");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          // footer: 'Why do I have this issue?</a>'
        });
      }
      console.log(res);
    })
      .catch((err) => console.log(err));
  };

  return (
    <div className='col w-50' style={{ marginLeft: "25%" }}>
      <form onSubmit={handleSubmit}>
        <h1 className='pt-5  text-primary'>Nouveau pompiste</h1>
        <div className="group mt-5">
          <label htmlFor="nom" className={styles.label}>Nom</label>
          <input
            type="text"
            name="nom"
            className="form-control"
            value={values.nom}
            onChange={handleInput}
          />
        </div>
        <div className="group mt-2">
          <label htmlFor="prenom" className={styles.label}>Prenom</label>
          <input
            type="text"
            name="prenom"
            className="form-control"
            value={values.prenom}
            onChange={handleInput}
          />
        </div>
        <div className="group mt-2">
          <label htmlFor="date_de_nessance" className={styles.label}>Date_de_nessance</label>
          <input
            type="date"
            name="date_de_nessance"
            className="form-control"
            value={values.date_de_nessance}
            onChange={handleInput}
          />
        </div>
        <div className="group mt-2">
          <label htmlFor="date_de_recretement" className={styles.label}>Date_de_recretement</label>
          <input
            type="date"
            name="date_de_recretement"
            className="form-control"
            value={values.date_de_recretement}
            onChange={handleInput}
          />
        </div>
        <div className="group mt-2">
          <label htmlFor="date_de_sortie" className={styles.label}>Date_de_sortie</label>
          <input
            type="date"
            name="date_de_sortie"
            className="form-control"
            value={values.date_de_sortie}
            onChange={handleInput}
          />
        </div>

        <button type="submit" className="btn btn-success col mt-3">Validez</button>
      </form>
    </div>
  );
}

export default addUsers;
