"use client";

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
import {StationContext, useStationURL} from "@/context/IdStationURL";

type headP = {
  idCuve : number;
};
function table_carburant(props:headP) {


  const {IdStationURL,setIdStationURL}=useStationURL();



      
      const [values, setValues] = useState({
        IDCuve : props.idCuve,
        
      });

  
    
    
    const [data, setData] = useState([]);
    useEffect(() => {
      axios.post(`http://cdd.dzkimtech.com/api/Volet`,values)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }, []);
  
    // const handleEditPompist = (id: number) => {
    //   window.location.href = `/pages/indexSST/${props.idCuve}/vent/${id}`;

    // };
  
    return (
      <div className=" p-5  w-100 ml-5">
        <div className="d-flex">
          <Link
            href={`/home/${IdStationURL}`}
            className={styles.aHerfImg}
            style={{ marginLeft: "-1%" }}
          >
            <Image src={arrow} alt={""} width={25} height={25} />
          </Link>
          <h3 style={{ marginLeft: "2%" }}>
            <strong>{props.idCuve}</strong>
          </h3>
        
        </div>
        <br />
        <MDBTable className=" table-responsive ">
          <MDBTableHead className="">
            <tr>
              <th scope="col"></th>
              <th scope="col">Num</th>
              <th scope="col">Statut</th>
          
            </tr>
          </MDBTableHead>
          <MDBTableBody>
      
        { 
  data.map((carb, index) => {
    return (
      <Link className="row" href={`/pages/indexSST/${props.idCuve}/vent/${carb["id"]}`}>
        <tr key={index}   >
          <td></td>
          <td>{carb["Num"]}</td>
          <td>{carb["Bloquer"]}</td>
        </tr>
      </Link>
    )
  })
}

          </MDBTableBody>
        </MDBTable>
      </div>
    );
  }


export default table_carburant;
