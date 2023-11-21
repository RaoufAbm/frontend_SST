"use client";
import styles from "/app/page.module.css";
import React, { useEffect, useState } from "react";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBIcon,
} from "mdb-react-ui-kit";
import axios from "axios";
import Link from "next/link";
import { useIdVoletURL } from "@/context/idVoletURL";
import { useVentURL } from "@/context/idVentURL";
import dots from "@/icons/3Dots.png";
import Image from "next/image";

function ventIndex() {
  const { IdVoletURL } = useIdVoletURL();
  const { IdVentURL, setIdVentURL } = useVentURL();

  const [Delete, setDelete] = useState({
    sup: "1",
  });

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://cdd.dzkimtech.com/api/Vente?idVolet=${IdVoletURL}`)
      .then((res) => {
        console.log(res.data); // Log the response
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [IdVentURL]);

  const DeleteVent = (id: number) => {
    axios
      .put(`http://cdd.dzkimtech.com/api/SupVente?id=${id}`, Delete)
      .then((res) => {
        setData(data.filter((vent) => vent["id"] !== id));
      });
  };
  const handleEditVent = (id: number) => {
    setIdVentURL(id);
  };
  return (
    <>
      <div className={`row w-100 mt-4 ${styles.textHeader}` } >
        <h1 style={{ marginLeft: "2%" }}>Vent</h1>
      
        <Link href={`/pages/indexSST/1/ajouteVent`}>
        <button type="button" className={`btn btn-success ${styles.buttonADDpompist}`}>
        <i className="bi bi-plus"></i>
        <i className="bi bi-ev-station-fill"></i> 
          </button>
          <div className={styles.buttonPompist}>
          <button type="button" className="btn  btn-success ml-5">
          <i className="bi bi-plus"></i>
          <i className="bi bi-ev-station-fill"></i> Ajoute
          </button>
          </div>
        </Link>
      </div>

      <div className={styles.tableVent}>
        <MDBTable className=" table-responsive table-dark  mt-3">
          <MDBTableHead>
            <tr>
              <th scope="col">index</th>
              <th scope="col">Date </th>
              <th scope="col">Date de creation</th>
              <th scope="col">Date de modification</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {data.map((vent, index) => {
              return (
                <tr key={index}>
                  <td>{vent["index"]}</td>
                  <td>{vent["date"]} </td>
                  <td>{vent["createdAt"]}</td>
                  <td>{vent["updatedAt"]}</td>
                  <td  className={styles.ThTableDotDark}>
                    <div className="btn-group" role="group">
                      <button
                        id="btnGroupDrop1"
                        type="button"
                        className={`btn btn-info dropdown-toggle ${styles.BottonAction}`}
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Action
                      </button>
                      <div   
                     className={styles.dotsAction}
                        id="btnGroupDrop1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        <Image src={dots} alt={""} width={20} height={20}  />

                        </div>
                      <div
                        className="dropdown-menu mr-5 "
                        aria-labelledby="btnGroupDrop1"
                      >
                        <Link
                          key={index}
                          href={`/pages/indexSST/${IdVoletURL}/editVent/${vent["id"]}`}
                          className={styles.aHerf}
                          onClick={() => handleEditVent(vent["id"])}
                        >
                          <div className="dropdown-item">Modifie</div>
                        </Link>

                        <div
                          className="dropdown-item"
                          onClick={() => DeleteVent(vent["id"])}
                        >
                          Suprimer
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </MDBTableBody>
        </MDBTable>
      </div>
    </>
  );
}
export default ventIndex;
