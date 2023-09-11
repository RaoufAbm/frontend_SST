import styles from "/app/page.module.css";
import React, { useRef } from "react";

type headP={
  title:string,
}

function cuve(props) {
  const divRef = useRef(null);
  // const handleClick = () => {
   
  
// if (props.percentage!=0) {
  
//   divRef.current.style.top = props.percentage;
//   divRef.current.style.backgroundColor = "red";
// }
  // };
  // const half = () => {
  //   divRef.current.style.top = "88%";
  //   divRef.current.style.backgroundColor = "blue";
  // };
  // const empty = () => {
  //   divRef.current.style.top = "50%";
  //   divRef.current.style.backgroundColor = "green";
  // };
  return (
    <div className={styles.box} ref={divRef} >
      <header className={styles.boxHeader}>
        <span className={styles.title}>Cuve : {props.title}</span>

        <p
          className={styles.paragraph}
          style={{ marginTop: "0%", marginLeft: "49%" }}>
          Capacite <strong>{props.Capacite} L</strong>
        </p>
        {/* <div className={styles.line} style={{marginTop: "-2%"}}></div> */}
        {/* <p className={styles.paragraph} style={{marginLeft:"8%",marginBottom:"2%",color:"#ffae00"}}>
        Etat actuel
     </p> */}
        <div className={styles.infoCuve}>
          <div className={styles.infoContent}>
            <p
              className={styles.paragraph}
              style={{ color: "#ffae00;", fontSize: "35px", marginLeft:"-25%" ,textAlignLast: "start" }}>         
              {props.percentage} <br /> <strong>{props.Qte}</strong>L
            </p>
          </div>
        </div>
        {/* <div className={styles.line} style={{marginTop: "-10%", marginLeft:" 33%",width: "27%"}}></div> */}
      </header>
      <div className={styles.boxAuthor}>
        {/* ________________________________cuve _________________________________________*/}

        <div className={styles.CuveSST}>
          <div className={styles.cylinder}>
            <div className={styles.water} ></div>
          </div>
        </div>
      </div>
      <div className={styles.tags}>
          <img src="../images/info.png" alt="" />
          <img src="../images/alert.png" alt="" />
          <img src="../images/warnning.png" alt="" />
      </div>
      {/* ________________________________Circle Juge _________________________________________*/}

      {/* <div className={styles.positionCircleJuge}>
      <div className={styles.circleWrap}>
        <div className={styles.circle}>
          <div className= {`${styles.mask} ${styles.full}`}>
            <div className={styles.fill} />
          </div>
          <div className={`${styles.mask} ${styles.half}`}>
            <div className={styles.fill}  />
          </div>
          <div className={styles.insideCircle}> 75% </div>
        </div>
      </div>
      </div> */}
    </div>
  );
}
export default cuve;