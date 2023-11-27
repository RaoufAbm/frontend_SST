import React from "react";
import green from "@/icons/greenDot.png";
import red from "@/icons/redDot.png";
import carbr from "@/images/carburant2.png";
import Image from "next/image";
import styles from "/app/page.module.css";

type HeadProps = {
  NameCarb: string;
  color: string;
};

function Carburant(props: HeadProps) {
  return (
    <div className={styles.carburant}>
       <div
        className="card text-dark bg-light  shadow p-2 mb-1 bg-body rounded border "
        
        >
        <div className="card-header h3 bg-dark-opacity-10 shadow-none p-3 mb-0 rounded">
          {props.NameCarb}
        </div>
        <div className="card-body">
          <Image src={carbr} alt={""} width={150} height={70} />
        {props.color === "Actif" ? (
          <Image src={green} alt="" width={20} height={20} />
        ) : (
          <Image src={red} alt="" width={20} height={20} />
        )}
        </div>
      </div> 
    
    </div>
  );
}

export default Carburant;
