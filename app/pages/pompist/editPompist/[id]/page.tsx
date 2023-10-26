"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react"; // Removed SyntheticEvent
import styles from "/app/page.module.css";
import axios from "axios";
import Swal from "sweetalert2";
import { PompistURL, usePompistURL } from "@/context/idPompistURL";
import arrow from "@/icons/ArrowLeft.png";
import Image from "next/image";
import { useStationURL } from "@/context/IdStationURL";

function EditUsers() {
  const { IdPompistURL, setIdPompistURL } = usePompistURL();
  const { IdStationURL, setIdStationURL } = useStationURL();

  const [Id, setId] = useState({
    id: IdPompistURL,
  });

  const [data, setData] = useState({
    nom: "",
    prenom: "",
    date_de_nessance: "",
    date_de_recretement: "",
    date_de_sortie: "",
    ID_Station: IdStationURL,
  });

  useEffect(() => {
    axios
      .post(`http://cdd.dzkimtech.com/api/FichePompist`, Id)
      .then((res) => {
        const responseData = res.data;
        setData({
          nom: responseData.nom,
          prenom: responseData.prenom,
          date_de_nessance: responseData.date_de_nessance,
          date_de_recretement: responseData.date_de_recretement,
          date_de_sortie: responseData.date_de_sortie,
          ID_Station: responseData.ID_Station,
        });
      })
      .catch((err) => console.log(err));
  }, [Id]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    axios
      .put(`http://cdd.dzkimtech.com/api/UpdatePompist?id=${Id.id}`, data)
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
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
        // console.log(res.request);
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
        <div className="ml-5">
      <h1 className={styles.textPage}>Modifie pompiste</h1>
    </div>      
     </div>

      <div className={`col-12 col-md-6  ${styles.NewPompistInput}`}>
        <form onSubmit={handleSubmit}>
          <div className="group mt-5">
            <label htmlFor="nom" className={styles.label}>
              Nom
            </label>
            <input
              type="text"
              name="nom"
              className="form-control"
              value={data.nom}
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
              value={data.prenom}
              onChange={handleInput}
            />
          </div>
          <div className="group mt-2">
            <label htmlFor="date_de_nessance" className={styles.label}>
              Date_de_nessance
            </label>
            <input
              type="date"
              name="date_de_nessance"
              className="form-control"
              value={data.date_de_nessance}
              onChange={handleInput}
            />
          </div>
          <div className="group mt-2">
            <label htmlFor="date_de_recretement" className={styles.label}>
              Date_de_recretement
            </label>
            <input
              type="date"
              name="date_de_recretement"
              className="form-control"
              value={data.date_de_recretement}
              onChange={handleInput}
            />
          </div>
          <div className="group mt-2">
            <label htmlFor="date_de_sortie" className={styles.label}>
              Date_de_sortie
            </label>
            <input
              type="date"
              name="date_de_sortie"
              className="form-control"
              value={data.date_de_sortie}
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

export default EditUsers;
