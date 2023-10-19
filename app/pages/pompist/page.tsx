"use client";
import React, { SyntheticEvent, useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { MDBTable, MDBTableHead, MDBTableBody, MDBIcon } from 'mdb-react-ui-kit';
import "bootstrap/dist/js/bootstrap";
import {StationURL, useStationURL} from "@/context/IdStationURL";


function pompist() {
  const {IdStationURL,setIdStationURL}=useStationURL();

    const [values, setValues] = useState({
      ID_Station: IdStationURL,
    });

    const [Delete, setDelete] = useState({
      sup:"1",
    });

  
  
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.post(`http://cdd.dzkimtech.com/api/Pompist`,values)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);


  const DeletePompist = (id: number) => {
    axios.put(`http://cdd.dzkimtech.com/api/supPompist?id=${id}`,Delete)
    .then((res) => {
      setData(data.filter(pompist => pompist["id"] !== id));
    })
  };
  const EditPompist = (id:number)=> {
    window.location.href = `/pages/pompist/editPompist/${id}`
  };
  return (
    
    
          <div className=' p-5  w-100 ml-5'>
            <div className="d-flex">
          <h3 style={{ marginLeft:"-5%"}}><strong>Pompist</strong></h3>
          <Link href="/pages/pompist/insertPompist">
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
              <th scope='col'>Nom</th>
              <th scope='col'>Prenom</th>
              <th scope='col'>Date de nessance </th>
              <th scope='col'>Date de recretement</th>
              <th scope='col'>Date de sortie</th>
              <th scope='col'></th>
              
            </tr>
          </MDBTableHead>
          <MDBTableBody >
            { 
            data.map((pompist,index) =>{
              return <tr key={index} >  
              <td></td>
              <td>{pompist["nom"]}</td>
              <td>{pompist["prenom"]} </td>
              <td>{pompist["date_de_nessance"]}</td>
              <td>{pompist["date_de_recretement"]}</td>
              <td>{pompist["date_de_sortie"]}</td>
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
                <div className="dropdown-menu " aria-labelledby="btnGroupDrop1">
                  <div className="dropdown-item" onClick={() => EditPompist(pompist["id"])} >
                    Modifie
                  </div>
                  <div className="dropdown-item" onClick={() => DeletePompist(pompist["id"])}>
                    Suprimer
                  </div>
                </div>
              </div>
            </td>
              </tr>
            })}
    
    
    
          </MDBTableBody>
        </MDBTable>
        </div>       
      
  );
}
export default pompist;

