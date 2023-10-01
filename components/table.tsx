import { MDBTable, MDBTableHead, MDBTableBody, MDBIcon } from 'mdb-react-ui-kit';
import axios from 'axios';
import React, { useEffect, useRef, useState } from "react";

function table() {
 
 const [data,setData]= useState([])
 useEffect(()=> {
  axios.get('')
  .then(res => setData(res.data))
  .catch(err => console.log(err));
 },[])
  return (
    <div>
    <MDBTable className='table-responsive'>
      <MDBTableHead light>
        <tr>
          <th scope='col'></th>
          <th scope='col'>level</th>
          <th scope='col'>alarmLevel</th>
          <th scope='col'>alarmBattery</th>
          <th scope='col'>volt</th>
          <th scope='col'>rsrp</th>
          <th scope='col'>id</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        { 
        data.map((cuve,index) =>{
          return <tr key={index}>  
          <td></td>
          <td>{cuve.Level}</td>
          <td>{cuve.AlarmeLevel} </td>
          <td>{cuve.AlarmeBattery} </td>
          <td>{cuve.Volt}</td>
          <td>{cuve.Rsrp}</td>
          <td>{cuve.id}</td>
          </tr>
        })}

       
        /* <tr>
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
        </tr> */
      </MDBTableBody>
    </MDBTable>
    </div>
  );
}
export default table;
