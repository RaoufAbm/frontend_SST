import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBIcon,
} from "mdb-react-ui-kit";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import arrow from "@/icons/ArrowLeft.png";
import arrowNext from "@/icons/arrowNext.png";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/page.module.css";
import { useStationURL } from "@/context/IdStationURL";

type headP = {
  IDCuve: number;
};
function TableMusurs(props: headP) {
  const { IdStationURL, setIdStationURL } = useStationURL();

  const [values, setValues] = useState({
    IDCuve: props.IDCuve,
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post("http://cdd.dzkimtech.com/api/Mesur", values)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="row w-100 mt-4" style={{ marginLeft: "5%" }}>
        <Link
          href={`/home/${IdStationURL}`}
          className={styles.aHerfImg}
          style={{ marginLeft: "-1%" }}
        >
          <Image src={arrow} alt={""} width={35} height={35} />
        </Link>
        <div className="ml-5 mt-1">
          <h1 className={styles.textPage}>Museures</h1>
        </div>
      </div>
      <div className={styles.TableStyle}>      
      
        <MDBTable className=" table-responsive ">
          <MDBTableHead className="">
            <tr>
              <th scope="col" id="debut"></th>
              <th scope="col">N°</th>
              <th scope="col">Date</th>
              <th scope="col">Niveau</th>
              <th scope="col">Qte </th>
              <th scope="col">Alarme de niveau</th>
              <th scope="col">Alarme de batterie</th>
              <th scope="col">Volt</th>
              <th scope="col" id="fin">Rsrp</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {data.map((Mesur, index) => {
              return (
                <tr key={index}>
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
              );
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
        <div className={styles.PaginationTable}>
        <ul className="pagination float-right mr-5">
          <li className="page-item">
            <a className="page-link" href="#debut">
            <Image src={arrowNext} alt={""} width={20} height={20} className="rotate" style={{ transform: 'rotate(180deg)' }} />
            </a>
          </li>
          {/* <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
            </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li> */}
           <a className="page-link" href="#">
            </a>
          <li className="page-item">
            <a className="page-link" href="#fin">
            <Image src={arrowNext} alt={""} width={20} height={20}  />
            </a>
          </li>
        </ul>
        </div>
      </div>
    </>
  );
}
export default TableMusurs;
