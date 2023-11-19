"use client";
import React, { SyntheticEvent, useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBIcon,
} from "mdb-react-ui-kit";
import "bootstrap/dist/js/bootstrap";
import { useStationURL } from "@/context/IdStationURL";
import { PompistURL, usePompistURL } from "@/context/idPompistURL";
import styles from "/app/page.module.css";
import { useDataPompist } from "@/context/dataPompist";
import dots from "@/icons/3Dots.png";
import Image from "next/image";

function pompist() {
  const { IdStationURL, setIdStationURL } = useStationURL();
  const { IdPompistURL, setIdPompistURL } = usePompistURL();
  const { AllPompist, setAllPompist } = useDataPompist();

  const [ID_Station, setID_Station] = useState({
    ID_Station: IdStationURL,
  });

  const [Delete, setDelete] = useState({
    sup: "1",
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post(`http://cdd.dzkimtech.com/api/Pompist`, ID_Station)
      .then((res) => {
        // Set the data in the context using setAllPompist
        setAllPompist(res.data);
        // Set the local component state
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const DeletePompist = (id: number) => {
    axios
      .put(`http://cdd.dzkimtech.com/api/supPompist?id=${id}`, Delete)
      .then((res) => {
        // Update the context data by removing the deleted pompist
        setAllPompist((prevPompists) =>
          prevPompists.filter((pompist) => pompist.id !== id)
        );
        // Update the local component state as well
        setData(data.filter((pompist) => pompist["id"] !== id));
      })
      .catch((err) => console.log(err));
  };

  const handleEditPompist = (id: number) => {
    setIdPompistURL(id);
  };

  return (
    <>
      <div className="row w-50 mt-4" style={{ marginLeft: "10%"  }}>
        <h1 style={{ marginLeft: "-5%" }}>Pompist</h1>
        <Link href="/pages/pompist/insertPompist" className="mt-2">
          <button type="button" className="btn  btn-success ml-5">
            <i className="bi bi-person-plus"></i> Ajoute
          </button>
        </Link>
      </div>

      <div className={styles.TableStyle}>
        <MDBTable className=" table-responsive ">
          <MDBTableHead className="">
            <tr>
              <th scope="col" ></th>
              <th scope="col">Nom</th>
              <th scope="col">Prenom</th>
              <th scope="col">Date de nessance </th>
              <th scope="col">Date de recretement</th>
              <th scope="col">Date de sortie</th>
              <th scope="col"  > <div className={styles.ThTableDot}></div> </th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {data.map((pompist, index) => {
              return (
                <tr key={index}>
                  <td></td>
                  <td >{pompist["nom"]}</td>
                  <td>{pompist["prenom"]} </td>
                  <td>{pompist["date_de_nessance"]}</td>
                  <td>{pompist["date_de_recretement"]}</td>
                  <td>{pompist["date_de_sortie"]}</td>
                  <td  className={styles.ThTableDot}>
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
                        className="dropdown-menu "
                        aria-labelledby="btnGroupDrop1"
                      >
                        <Link
                          key={index}
                          href={`/pages/pompist/editPompist/${pompist["id"]}`}
                          className={styles.aHerf}
                          onClick={() => handleEditPompist(pompist["id"])}
                        >
                          <div className="dropdown-item">Modifie</div>
                        </Link>
                        <div
                          className="dropdown-item"
                          onClick={() => DeletePompist(pompist["id"])}
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
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#debut">
              Previous
            </a>
          </li>
          {/* <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li> */}
          <li className="page-item">
            <a className="page-link" href="#fin">
              Next
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default pompist;
