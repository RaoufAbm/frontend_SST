import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBIcon,
} from "mdb-react-ui-kit";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import arrow from "@/icons/arrow-left.png";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/page.module.css";
import "bootstrap/dist/js/bootstrap";

function table_carburant() {
  if (typeof window !== "undefined") {
    const id = (window as any).aa;
    return (
      <div className=" p-5  w-100 ml-5">
        <div className="d-flex">
          <Link
            href={`/home/${id}`}
            className={styles.aHerfImg}
            style={{ marginLeft: "-1%" }}
          >
            <Image src={arrow} alt={""} width={25} height={25} />
          </Link>
          <h3 style={{ marginLeft: "2%" }}>
            <strong>Index</strong>
          </h3>
          <Link href="/pages/indexSST">
            <button type="button" className="btn  btn-success ml-5">
              <i className="bi bi-person-plus"></i> Ajoute
            </button>
          </Link>
        </div>
        <br />
        <MDBTable className=" table-responsive ">
          <MDBTableHead className="">
            <tr>
              <th scope="col"></th>
              <th scope="col">N°</th>
              <th scope="col">Date</th>
              <th scope="col">Niveau</th>
              <th scope="col">Qte </th>
              <th scope="col">Alarme de niveau</th>
              <th scope="col">Alarme de batterie</th>
              <th scope="col">Volt</th>
              <th scope="col">Rsrp</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <td>raouf</td>
            <td>raouf</td>
            <td>raouf</td>
            <td>raouf</td>
            <td>raouf</td>
            <td>raouf</td>
            <td>raouf</td>
            <td>raouf</td>
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
                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <a className="dropdown-item" href="#">
                    Modifie
                  </a>
                  <a className="dropdown-item" href="#">
                    Suprimer
                  </a>
                </div>
              </div>
            </td>
            {/* { 
        data.map((Mesur,index) =>{
          return <tr key={index} >  
          <td></td>
          <td>{Mesur["id"]}</td>
          <td>{Mesur["date"]}</td>
          <td>{Mesur["Level"]} mm</td>
          <td>{Mesur["Qte"]} L</td>
          <td>{Mesur["AlarmeLevel"]}</td>
          <td>{Mesur["AlarmeBattery"]} </td>
          <td>{Mesur["Volt"]}</td>
          <td>{Mesur["Rsrp"]}</td>
          </tr>
        })} */}
          </MDBTableBody>
        </MDBTable>
      </div>
    );
  }
}

export default table_carburant;
