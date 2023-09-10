import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/app/page.module.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import ReactDOM from "react-dom";
import { faTruckDroplet } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export function sidebar() {
  return (
    <div className="col-auto  col-xl-0 px-sm-2 px-0  " style={{background:"#17141D"}}>
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <ul
          className="nav nav-pills flex-column mb-sm-auto  align-items-center align-items-sm-start vh-100"
          style={{ width: "118%", marginLeft: "-9%" }}
          id="menu"
        >
          <Link href="/home" className={`${styles.li} ${styles.aHerf}`}>
            <li >
              {/* <i className="fs-4 bi-speedometer2" /> */}
              <i className="bi bi-calendar3-range-fill"></i>
              <span className="ml-3 ms-1 d-none d-sm-inline">
                tableau de bord
              </span>
            </li>
          </Link>
          <Link href="/pompist" className={`${`${styles.li} ${styles.aHerf}`}`}>
            <li >
              <i className="fs-4 bi-people" />

              <span className="ml-3 ms-1 d-none d-sm-inline">Pompist</span>
            </li>
          </Link>
          <Link href="/achat" className={`${styles.li} ${styles.aHerf}`}>
            <li >
              {/* <i className="fs-4 bi-bootstrap" /> */}
              {/* <FontAwesomeIcon icon={faHome} /> */}
              {/* <FontAwesomeIcon icon={faTruckDroplet} /> */}
              <span className="ml-3 ms-1 d-none d-sm-inline">Achat</span>
            </li>
          </Link>
          <Link href="/indexSST" className={`${styles.li} ${styles.aHerf}`}>
            <li >
              {/* <i className="fs-4 bi-grid" /> */}
              {/* <FontAwesomeIcon icon={faPenToSquare} /> */}

              <span className="ml-3 ms-1 d-none d-sm-inline">Index</span>
            </li>
          </Link>
          <Link href="/statistique" className={`${styles.li} ${styles.aHerf}`}>
            <li>
              {/* <i className="fs-4 bi-table" /> */}
              {/* <FontAwesomeIcon icon={faChartLine} /> */}
              <span className="ml-3 ms-1 d-none d-sm-inline">statistique</span>
            </li>
          </Link>
          
          <Link href="/" >
            <li
              className={`${styles.li} ${styles.aHerf}`}
              style={{ bottom: "5%",height:"6vh",borderTop:"1px solid rgba(255, 255, 255, 0.177)" ,position: "absolute" }}
            >
              <i className="bi bi-box-arrow-left"></i>
              <span className="ml-3 ms-1 d-none d-sm-inline">Logout</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
export default sidebar;
