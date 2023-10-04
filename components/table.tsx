import { MDBTable, MDBTableHead, MDBTableBody, MDBIcon } from 'mdb-react-ui-kit';
import axios from 'axios';
import React, { useEffect, useRef, useState } from "react";
type headP = {
  IDCuve : number;
};
function Table(props:headP) {
 


  const [values, setValues] = useState({
    IDCuve: props.IDCuve,
    
  });

  const [data,setData]= useState([])
  
  useEffect(()=> {
    axios.post('http://cdd.dzkimtech.com/api/Mesur',values)
    .then(res => setData(res.data))
    .catch(err => console.log(err));
},[])
return (
    <div className='bg-dark p-5 w-100'>
    <MDBTable className='table table-responsive w-100'>
      <MDBTableHead light>
        <tr>
          <th scope='col'></th>
          <th scope='col'>N°</th>
          <th scope='col'>Date</th>
          <th scope='col'>Niveau</th>
          <th scope='col'>Qte </th>
          <th scope='col'>Alarme de niveau</th>
          <th scope='col'>Alarme de batterie</th>
          <th scope='col'>Volt</th>
          <th scope='col'>Rsrp</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        { 
        data.map((Mesur,index) =>{
          return <tr key={index}>  
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
        })}



        {/* <tr>
          <th scope='col'></th>
          <td className='text-danger'>
            <MDBIcon className='me-1' fas icon='caret-down' />
            -48.8%
          </td>
          <td className='text-success'>
            <MDBIcon className='me-1' fas icon='caret-up' />
            14.0%
          </td>
          <td className='text-success'>
            <MDBIcon className='me-1' fas icon='caret-up' />
            46.4%
          </td>
          <td className='text-success'>
            <MDBIcon className='me-1' fas icon='caret-up' />
            29.6%
          </td>
          <td className='text-danger'>
            <MDBIcon className='me-1' fas icon='caret-down' />
            -11.5%
          </td>
          <td className='text-danger'>
            <MDBIcon className='me-1' fas icon='caret-down' />
            -11.5%
          </td>
        </tr>
        <tr>
          <th scope='col'></th>
          <td className='text-danger'>
            <MDBIcon className='me-1' fas icon='caret-down' />
            -17,654
          </td>
          <td className='text-success'>
            <MDBIcon className='me-1' fas icon='caret-up' />
            28
          </td>
          <td className='text-success'>
            <MDBIcon className='me-1' fas icon='caret-up' />
            111
          </td>
          <td className='text-success'>
            <MDBIcon className='me-1' fas icon='caret-up' />
            $1,092.72
          </td>
          <td className='text-danger'>
            <MDBIcon className='me-1' fas icon='caret-down' />
            $-1.78
          </td>
          <td className='text-danger'>
            <MDBIcon className='me-1' fas icon='caret-down' />
            $-1.78
          </td>
        </tr>  */}
      </MDBTableBody>
    </MDBTable>
    </div>
  );
}
export default Table;
