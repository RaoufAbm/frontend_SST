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
      <div className="row w-100 mt-4" style={{ marginLeft: "10%" }}>
        <h1 style={{ marginLeft: "2%" }}>Vent</h1>
        <Link href={`/pages/indexSST/1/ajouteVent`}>
          <button type="button" className="btn  btn-success ml-5 mt-2">
            <i className="bi bi-person-plus"></i> Ajoute
          </button>
        </Link>
      </div>

      <div className=" p-5  w-100 ml-5">
        <MDBTable className=" table-responsive table-dark  mt-3">
          <MDBTableHead className="">
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
                  <td>
                    <div className="btn-group" role="group">
                      <button
                        id="btnGroupDrop1"
                        type="button"
                        className="btn btn-info dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Action
                      </button>

                      <div
                        className="dropdown-menu "
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
