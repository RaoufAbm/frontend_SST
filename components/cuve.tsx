import styles from "/app/page.module.css";
import React, { useRef } from "react";

type headP={
  title:string,
  color_:string,
  Capacity :int,
  percentage :int,
  Qte:int,

}

function cuve(props:headP) {
  const divRef = useRef(null);
  return (
    <div className={styles.box} ref={divRef} >
      <header className={styles.boxHeader}>
        <span className={styles.title}>Cuve : {props.title}</span>

        <p
          className={styles.capacity}>
          Capacite <strong>{props.Capacity} L</strong>
        </p>
      
        <div className={styles.infoCuve}>
          <div className={styles.infoContent} >
          <span className={styles.EtatTitle}>Etat actuel :</span>
            <p  className={styles.EtatActuel}>
              {props.percentage}%  <br /><strong>{props.Qte}</strong>L
            </p>
          </div>
        </div>
        {/* <div className={styles.line} style={{marginTop: "-10%", marginLeft:" 33%",width: "27%"}}></div> */}
      </header>
      <div className={styles.boxAuthor}>
        {/* ________________________________cuve _________________________________________*/}

        <div className={styles.CuveSST}>
          <div className={styles.cylinder}>
            <div className={styles.water} style={{ backgroundColor: props.color_ ,top: (100-(props.percentage))+"%"  }}></div>
            
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
