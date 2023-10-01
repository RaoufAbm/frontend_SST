import styles from "/app/page.module.css";
import React, { useRef } from "react";
import alert from "@/images/alert.png";
import info from "@/images/info.png";
import warning from "@/images/warnning.png";
import Image from "next/image";
import { log } from "console";
import Link from "next/link";

type headP = {
  title: string;
  color_: string;
  Capacity: int;
  percentage: int;
  Qte: int;
  notification: number;
  wifi: number;
  battery: number;
};

function cuve(props: headP) {
  const Info = React.useRef();
  const Alert = React.useRef();
  const Warning = React.useRef();
  const wifi1 = React.useRef();
  const wifi2 = React.useRef();
  const wifi3 = React.useRef();

  React.useEffect(() => {
    if (props.notification.a !== null) {
      Info.current.style.filter = "opacity(100)";
    }
    if (props.notification.b !== "") {
      Alert.current.style.filter = "opacity(100)";
    }
    if (props.notification.c !== "") {
      Warning.current.style.filter = "opacity(100)";
    }
  });
  React.useEffect(() => {
    if (props.wifi == 1) {
      wifi1.current.style.display = "block";
    }
    if (props.wifi == 2) {
      wifi2.current.style.display = "block";
    }
    if (props.wifi == 3) {
      wifi3.current.style.display = "block";
    }
  });

  return (
    <div className={styles.box}>
      <Link href="/pages/indexSST" className={styles.aHerf}>
        <div className={styles.boxInformation}>
          <header className={styles.boxHeader}>
            <span className={styles.title}>Cuve : {props.title}</span>

            <p className={styles.capacity}>
              Capacite <strong>{props.Capacity} L</strong>
            </p>

            {/* <div className={styles.infoCuve}> */}
              <div className={styles.infoContent}>
                <span className={styles.EtatTitle}>Etat actuel :</span>
                <p className={styles.EtatActuel}>
                  {props.percentage}% <br />
                  <strong>{props.Qte}</strong>L
                </p>
                {/* <div className={styles.line}></div> */}
              </div>
            {/* </div> */}
          </header>
        
          {/* ________________________________battrie reseax_________________________________________*/}
          <div className={styles.Battrie}>
            <div className={styles.borderBattery}>
              <div
                className={styles.battery}
                style={{ width: props.battery + "%" }}
              ></div>
              <div className={styles.BatteryDiv}></div>
            </div>

            <p className={styles.PercentageBattery}>{props.battery}%</p>
          </div>

          <div className={styles.Reseax}>
            <i
              className="bi bi-wifi"
              style={{ position: "absolute", display: "none" }}
              ref={wifi1}
            />
            <i
              className="bi bi-wifi-2"
              style={{ position: "absolute", display: "none" }}
              ref={wifi2}
            />
            <i
              className="bi bi-wifi-1 "
              style={{ position: "absolute", display: "none" }}
              ref={wifi3}
            />
          </div>
        </div>
      </Link>
      {/* ________________________________notification_________________________________________*/}
  {/* ________________________________cuve _________________________________________*/}
  <Link href="/pages/musurs" className={styles.aHerf}>
  <div className={styles.boxAuthor}>
            <div className={styles.CuveSST}>
              <div className={styles.bouchon1}></div>
              <div className={styles.bouchon2}></div>
              <div className={styles.cylinder}>
                <div
                  className={styles.water}
                  style={{
                    backgroundColor: props.color_,
                    top: 100 - props.percentage + "%",
                  }}
                ></div>
              </div>
            </div>
          </div>
          </Link>
      <div className={styles.notification}>
        <Link href="/pages/achat" className={styles.aHerf}>
          <Image
          src={info}
          alt={""}
          width={30}
          height={30}
          style={{ filter: "opacity(0%)" }}
          ref={Info}
        />
        </Link>
        <Link href="/pages/achat" className={styles.aHerf}>
          <Image
          src={warning}
          alt={""}
          width={30}
          height={30}
          style={{ filter: "opacity(0%)" }}
          ref={Warning}
        />
        </Link>
        <Link href="/pages/achat" className={styles.aHerf}>
          <Image
          src={alert}
          alt={""}
          width={30}
          height={30}
          style={{ filter: "opacity(0% " }}
          ref={Alert}
        />
        </Link>
      </div>
    </div>
  );
}
export default cuve;
