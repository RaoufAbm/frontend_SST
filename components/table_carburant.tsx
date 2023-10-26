"use client";

import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBIcon,
} from "mdb-react-ui-kit";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import arrow from "@/icons/ArrowLeft.png";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/page.module.css";
import "bootstrap/dist/js/bootstrap";
import { StationContext, useStationURL } from "@/context/IdStationURL";
import { useIdVoletURL } from "@/context/idVoletURL";

type headP = {
  idCuve: number;
  titleCuve: string;
};
function table_carburant(props: headP) {
  const { IdStationURL } = useStationURL();
  const { IdVoletURL, setIdVoletURL } = useIdVoletURL();

  const [values, setValues] = useState({
    IDCuve: props.idCuve,
  });

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .post(`http://cdd.dzkimtech.com/api/Volet`, values)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="row w-50 mt-4" style={{ marginLeft: "10%"  }}>
        <Link
          href={`/home/${IdStationURL}`}
          className={styles.aHerfImg}
          style={{ marginLeft: "-1%" }}
          >
          <Image src={arrow} alt={""} width={35} height={35} />
        </Link>
        <h1 style={{ marginLeft: "2%" }}>
          {props.titleCuve}
        </h1>
      </div>
    <div className=" p-5  w-25 ml-5">
      <MDBTable className=" table-responsive table-hover ml-1 pl-5">
        <MDBTableHead>
          <tr className="row ">
            <th scope="col">Num</th>
            <th scope="col">Statut</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {data.map((carb, index) => {
             const statut = carb["Bloquer"] ? "Actif" : "Block";

            
            return (
              <Link
                key={index}
                className={styles.Link}
                href={`/pages/indexSST/${props.idCuve}/vent/${carb["id"]}`}
                onClick={() => setIdVoletURL(carb["id"])}
              >
                <tr className="row ">
                  <td className=" w-50">{carb["Num"]}</td>
                  <td w-50>{statut}</td>
                </tr>
             </Link>
            );
          })}
        </MDBTableBody>
      </MDBTable>
    </div>
    </>

  );
}

export default table_carburant;
