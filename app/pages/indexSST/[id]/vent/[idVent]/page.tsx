"use client";
import Carburant from "@/components/carburant";
import styles from "/app/page.module.css";
import React, { useEffect, useState } from "react";
import TableCarburant from "@/components/table_carburant";
import { MDBTable, MDBTableHead, MDBTableBody, MDBIcon } from 'mdb-react-ui-kit';
import axios from "axios";
import {ThemeContext, useThemeContext} from "@/context/theme-context";

function ventIndex({params}) {
  
  const {IdStationURL,setIdStationURL}=useThemeContext();

    const idVolet=params.idVent;
  
    const [Delete, setDelete] = useState({
      sup:"1",
      
    });
  
  
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`http://cdd.dzkimtech.com/api/Vente?idVolet=${idVolet}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const DeleteVent = (id: number) => {
    axios.put(`http://cdd.dzkimtech.com/api/SupVente?id=${id}`,Delete)
    .then((res) => {
      setData(data.filter(vent => vent["id"] !== id));
    })
  };
 
  return (
   
                  <div className=' p-5  w-100 ml-5'>

        <MDBTable className=' table-responsive '>
          <MDBTableHead className=''>
            <tr>
        
              <th scope='col'>index</th>
              <th scope='col'>Date </th>
              <th scope='col'>Date de creation</th>
              <th scope='col'>Date de modification</th>
              
            </tr>
          </MDBTableHead>
          <MDBTableBody >
            { 
            data.map((vent,index) =>{
              return <tr key={index} >  
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
                <div className="dropdown-menu " aria-labelledby="btnGroupDrop1">
                  <div className="dropdown-item"  >
                    Modifie
                  </div>
                  <div className="dropdown-item" onClick={() => DeleteVent(vent["id"])}>
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
export default ventIndex;
