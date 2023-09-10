import styles from "/app/page.module.css";
import React, { useRef } from "react";

function cuve() {
    const divRef =useRef(null);
    const handleClick =()=> {
          divRef.current.style.top = "100%";
          divRef.current.style. backgroundColor="red";
    };
    const half =()=> {
        divRef.current.style.top = "88%";
        divRef.current.style.backgroundColor ="blue";

  };
  const empty =()=> {
    divRef.current.style.top = "50%";
    divRef.current.style.backgroundColor ="green";

};
  return (
    <div className={styles.box}>
      <header className={styles.boxHeader}>
        <p className={styles.paragraph}>May 3rd 2023</p>
        <span className={styles.title}>A Tale of Two Divs</span>
      </header>
      <div className={styles.boxAuthor}>
        <a className={styles.authorAvatar} href="#">
          <span></span>
        </a>
        <svg className={styles.halfCircle} viewBox="0 0 106 57">
          <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4" />
        </svg>
        <div className={styles.authorName}>
          <div className={styles.authorNamePrefix}>Author</div> Folarin Lawal
        </div>
        <div className={styles.CuveSST}>
        <div className={styles.cylinder}>
          <div className={styles.water} ref={divRef}></div>
        </div>
        </div>
      </div>
      <div className={styles.tags}>
        <a onClick={handleClick} href="#">html</a>
        <a onClick={half}  href="#">css</a>
        <a onClick={empty} href="#">web-dev</a>
      </div>
    </div>
  );
}
export default cuve;
