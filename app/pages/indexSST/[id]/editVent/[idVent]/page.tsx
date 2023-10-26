"use client";
import Link from "next/link";
import React, { useState, SyntheticEvent, useEffect } from "react";
import styles from "/app/page.module.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useStationURL } from "@/context/IdStationURL";
import { useIdVoletURL } from "@/context/idVoletURL";
import { useCuveURL } from "@/context/idCuveURL";
import Form from "react-bootstrap/Form";
import { useDataPompist } from "@/context/dataPompist";
import { useVentURL } from "@/context/idVentURL";

function editVent() {
  const { IdStationURL } = useStationURL();
  const { IdVoletURL } = useIdVoletURL();
  const { IdCuveURL } = useCuveURL();
  const { AllPompist } = useDataPompist();
  const { IdVentURL, setIdVentURL } = useVentURL();

  const filteredPompists = AllPompist.filter(
    (pompist) => pompist.sup === false
  );

  const [values, setValues] = useState({
    index: "",
    date: "",
    Volet_id: IdVoletURL,
    pompist_id: "",
  });

  const handleInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    axios
      .get(`https://cdd.dzkimtech.com/api/FicheVente?id=${IdVentURL}`)
      .then((res) => {
        const responseData = res.data;
        setValues({
          index: responseData.index,
          date: responseData.date,
          pompist_id: responseData.pompist_id,
          Volet_id: IdVoletURL,
        });
      })
      .catch((err) => console.log(err));
  }, [IdVentURL]);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    axios
      .put(`http://cdd.dzkimtech.com/api/UpDateVente?id=${IdVentURL}`, values)
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          }).then(function () {
            window.location.href = `/pages/indexSST/${IdCuveURL}/vent/${IdVoletURL}`;
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="d-flex w-100  mt-4 " style={{ marginLeft: "5%" }}>
        <div className="ml-5 mt-1">
          <h1 className={styles.textPage}>Nouvelle vente</h1>
        </div>
      </div>
      <div className={`col-12 col-md-6  ${styles.NewPompistInput}`}>
        <form onSubmit={handleSubmit}>
          <h1 className="pt-5 ">Modifier vente</h1>
          <div className="group mt-5">
            <label htmlFor="index" className={styles.label}>
              Index
            </label>
            <input
              type="text"
              name="index"
              className="form-control"
              value={values.index}
              onChange={handleInput}
            />
          </div>
          <div className="group mt-2">
            <label htmlFor="date" className={styles.label}>
              Date
            </label>
            <input
              type="date"
              name="date"
              className="form-control"
              value={values.date}
              onChange={handleInput}
            />
          </div>
          <div className="group mt-2">
            <label htmlFor="pompist_id" className={styles.label}>
              Pompist
            </label>
            <Form.Select
              aria-label="Select pompist"
              name="pompist_id"
              className="form-control"
              value={values.pompist_id}
              onChange={handleInput}
            >
              <option value="">Choose pompist</option>
              {filteredPompists.map((pompist) => (
                <option key={pompist.id} value={pompist.id}>
                  {pompist.nom} {pompist.prenom}
                </option>
              ))}
            </Form.Select>
          </div>
          <div className="d-flex col-12   ml-1">
            <Link href={`/pages/indexSST/${IdCuveURL.num}/vent/${IdVoletURL}`}>
              <button
                type="button"
                className="btn btn-secondary  mt-3 w-75 mr-5  "
                style={{ height: "50px" }}
              >
                Annuler
              </button>
            </Link>

            <button
              type="submit"
              className="btn btn-success mt-3 w-75  "
              style={{ height: "50px" }}
            >
              Valider
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default editVent;
