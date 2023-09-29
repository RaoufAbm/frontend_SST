import React from 'react'
import carbr from "@/images/carburant2.png";
import Image from "next/image";
import styles from "/app/page.module.css";

type headP = {
  NameCarb: string;
};

 function carburant(props: headP) {
  return (
    <div className={styles.carburant}>
        <div className={styles.SaisIndex}>
          
        <input className={styles.IndexInput} type="number" />
        <input className={styles.IndexInput} type="number" />
        <input className="form-control form-control-s mt-5 bg-dark" type="text" placeholder={props.NameCarb} disabled/>
        </div>
        <Image src={carbr} alt={""} width={600} height={400}  />



    </div>
  )
}
export default carburant;