"use client";
import Link from "next/link";
import React, { useState, SyntheticEvent } from 'react'; // Import SyntheticEvent
import styles from "/app/page.module.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useStationURL} from "@/context/IdStationURL";
import { useIdVoletURL } from "@/context/idVoletURL";
import { useCuveURL } from "@/context/idCuveURL";
import "bootstrap/dist/js/bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




function addVent() {
  const {IdStationURL}=useStationURL();
  const {IdVoletURL}=useIdVoletURL();
  const { IdCuveURL } = useCuveURL();

  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]  );

  const [values, setValues] = useState({
    index: "",  
    date: "", 
    Volet_id: IdVoletURL,
    pompist_id: 2,
  });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: SyntheticEvent) => { // Change to SyntheticEvent
    event.preventDefault();

    axios.post("http://cdd.dzkimtech.com/api/InsrVente", values)
    .then((res) => {
      if (res.status === 200) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
        }).then(function () {
          window.location.href = `/pages/indexSST/${IdCuveURL.num}/vent/${IdVoletURL}`;
        });
      } else {
        // alert("no existed");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          // footer: 'Why do I have this issue?</a>'
        });
      }
      console.log(res);
    })
      .catch((err) => console.log(err));
  };

  return (
    <div className='col w-50' style={{ marginLeft: "25%" }}>
      <form onSubmit={handleSubmit}>
        <h1 className='pt-5  text-primary'>Nouvelle vent</h1>
        <div className="group mt-5">
          <label htmlFor="index" className={styles.label}>index</label>
          <input
            type="text"
            name="index"
            className="form-control"
            value={values.index}
            onChange={handleInput}
          />
        </div>
        <div className="group mt-2">
          <label htmlFor="date" className={styles.label}>date</label>
          <input
            type="date"
            name="date"
            className="form-control"
            value={values.date}
            onChange={handleInput}
          />
        </div>

    

        <button type="submit" className="btn btn-success col mt-3">Validez</button>
      </form>
    </div>
  );
}

export default addVent;
