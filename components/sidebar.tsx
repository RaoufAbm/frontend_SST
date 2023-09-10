import "bootstrap/dist/css/bootstrap.min.css";
import styles from '@/app/page.module.css';
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

export function sidebar() {
  return (
    <div className="col-auto  col-xl-0 px-sm-2 px-0  bg-dark">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
      
        <ul
          className="nav nav-pills flex-column mb-sm-auto mt-5 align-items-center align-items-sm-start" style={{width:"118%",marginLeft:"-9%"}}
          id="menu"
        >
          <li className={styles.li}>
            <a
              href="/home"
              data-bs-toggle="collapse"
              className="nav-link px-0 align-middle h3 text-white"
            >
              <i className="fs-4 bi-speedometer2" />
              <span className="ml-3 ms-1 d-none d-sm-inline">
                tableau de bord
              </span>
            </a>
          </li>
          <li className={styles.li}>
            <a href="/pompist" className="nav-link px-0 align-middle h3 text-white">
              <i className="fs-4 bi-people" />

              <span className="ml-3 ms-1 d-none d-sm-inline">Pompist</span>
            </a>
          </li>
          <li className={styles.li}>
            <a
              href="/achat"
              data-bs-toggle="collapse"
              className="nav-link px-0 align-middle  h3 text-white"
            >
              <i className="fs-4 bi-bootstrap" />
              <span className="ml-3 ms-1 d-none d-sm-inline">Achat</span>
            </a>
          </li>
          <li className={styles.li}>
            <a
              href="/indexSST"
              data-bs-toggle="collapse"
              className="nav-link px-0 align-middle h3 text-white"
            >
              <i className="fs-4 bi-grid" />
              <span className="ml-3 ms-1 d-none d-sm-inline">Index</span>
            </a>
          </li>
          <li className={styles.li}>
            <a href="/statistique" className="nav-link px-0 align-middle h3 text-white">
              <i className="fs-4 bi-table" />
              <span className="ml-3 ms-1 d-none d-sm-inline">statistique</span>
            </a>
          </li>
          <li className={styles.li}>
            <a href="/" className="nav-link px-0 align-middle h3 text-white">
              <i className="fs-4 bi-people" />
              <span className="ml-3 ms-1 d-none d-sm-inline">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default sidebar;
