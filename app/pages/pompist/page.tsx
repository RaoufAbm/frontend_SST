"use client";
import styles from "/app/page.module.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { MDBTable, MDBTableHead, MDBTableBody, MDBIcon } from 'mdb-react-ui-kit';


function pompist() {
  if (typeof window !== 'undefined') {
    const id = (window as any).aa;
    console.log(id);
    
    const [values, setValues] = useState({
      IDStation:id,
      
    });

  
  
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.post(`http://cdd.dzkimtech.com/api/Pompist`,values)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={styles.main}>
      <div className={styles.body}>
        <div className={styles.Content}>
    
          <div className=' p-5  w-100 ml-5'>
            <div className="d-flex">
          <h3 style={{ marginLeft:"-5%"}}><strong>Pompist</strong></h3>
          <Link href="/pages/insertPompist">
            <button type="button" className="btn  btn-success ml-5">
            <i className="bi bi-person-plus"></i> Ajoute
            </button>
          </Link>
            </div>
          
          <br />
        <MDBTable className=' table-responsive '>
          <MDBTableHead className=''>
            <tr>
              <th scope='col'></th>
              <th scope='col'>N°</th>
              <th scope='col'>Nom</th>
              <th scope='col'>Prenom</th>
              <th scope='col'>Date de nessance </th>
              <th scope='col'>Date de recretement</th>
              <th scope='col'>Date de sortie</th>
              <th scope='col'>N° Station</th>
              
            </tr>
          </MDBTableHead>
          <MDBTableBody >
            { 
            data.map((pompist,index) =>{
              return <tr key={index} >  
              <td></td>
              <td>{pompist["id"]}</td>
              <td>{pompist["nom"]}</td>
              <td>{pompist["prenom"]} </td>
              <td>{pompist["date_de_nessance"]}</td>
              <td>{pompist["date_de_recretement"]}</td>
              <td>{pompist["date_de_sortie"]}</td>
              <td>{pompist["ID_Station"]}</td>
              </tr>
            })}
    
    
    
          </MDBTableBody>
        </MDBTable>
        </div>        </div>
      </div>
    </div>
  );
}}
export default pompist;




