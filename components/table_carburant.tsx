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
import {StationURL, useStationURL} from "@/context/IdStationURL";

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
        <tr key={index}  >
      <Link className={styles.aHerf}  href={`/pages/indexSST/${props.idCuve}/vent/${carb["id"]}`}>
          <td></td>
          <td>{carb["Num"]}</td>
          <td>{carb["Bloquer"]}</td>
      </Link>
        </tr>
    )
  })
}

          </MDBTableBody>
        </MDBTable>
      </div>
    );
  }


export default table_carburant;
