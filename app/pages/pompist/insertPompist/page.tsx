"use client";
import Link from "next/link";
import React, { useState, SyntheticEvent } from "react"; // Import SyntheticEvent
import styles from "/app/page.module.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useStationURL } from "@/context/IdStationURL";
import arrow from "@/icons/ArrowLeft.png";
import Image from "next/image";

function addUsers() {
  const { IdStationURL, setIdStationURL } = useStationURL();

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

  const handleSubmit = (event: SyntheticEvent) => {
    // Change to SyntheticEvent
    event.preventDefault();

    axios
      .post("http://cdd.dzkimtech.com/api/InsrPompist", values)
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
          Swal.fire({
            icon: "error",
            title: res.data.message,
            text: "Something went wrong!",
            // footer: 'Why do I have this issue?</a>'
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="d-flex w-100  mt-4 " style={{ marginLeft: "5%" }}>
        <Link
          href={`/pages/pompist`}
          className={styles.aHerfImg}
          style={{ marginLeft: "-1%" }}
        >
          <Image src={arrow} alt={""} width={35} height={35} />
        </Link>
        <div className="ml-5 mt-1">
      <h1 className={styles.textPage}>Nouvelle pompiste</h1>
    </div>     
     </div>

      <div className={`col-12 col-md-12 col-sm3  ${styles.NewPompistInput}`}>
        <form onSubmit={handleSubmit}>
          <div className="group mt-5">
            <label htmlFor="nom" className={styles.label}>
              Nom
            </label>
            <input
              type="text"
              name="nom"
              className="form-control"
              value={values.nom}
              onChange={handleInput}
            />
          </div>
          <div className="group mt-2">
            <label htmlFor="prenom" className={styles.label}>
              Prenom
            </label>
            <input
              type="text"
              name="prenom"
              className="form-control"
              value={values.prenom}
              onChange={handleInput}
            />
          </div>
          <div className="group mt-2">
            <label htmlFor="date_de_nessance" className={styles.label}>
              Date de nessance
            </label>
            <input
              type="date"
              name="date_de_nessance"
              className="form-control"
              value={values.date_de_nessance}
              onChange={handleInput}
            />
          </div>
          <div className="group mt-2">
            <label htmlFor="date_de_recretement" className={styles.label}>
              Date de recretement
            </label>
            <input
              type="date"
              name="date_de_recretement"
              className="form-control"
              value={values.date_de_recretement}
              onChange={handleInput}
            />
          </div>
          <div className="group mt-2">
            <label htmlFor="date_de_sortie" className={styles.label}>
              Date de sortie
            </label>
            <input
              type="date"
              name="date_de_sortie"
              className="form-control"
              value={values.date_de_sortie}
              onChange={handleInput}
            />
          </div>
          <div className="d-flex col-12   ml-1">
            <Link href={`/pages/pompist`}>
              <button
                type="button"
                className="btn btn-secondary  mt-3 w-75 mr-5  "
                style={{ height: "50px" }}
              >
                Annuler
              </button>
            </Link>
            <button type="submit" 
            className="btn btn-success mt-3 w-75  "style={{ height: "50px" }}>
              Validez
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default addUsers;
