import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import styles from "@/app/page.module.css";


export function navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light  h-100" style={{background:"#1EB2E8"}}>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className={`${styles.NavbarBrand} ${styles.aHerf}`}  href="#">BI Analytic solutions  </a>
    
      
        <input className="form-control " type="search" style={{width:"15%",marginLeft:"70%"}} placeholder="Search" aria-label="Search" />
        <button className="btn text-white border-white btn-outline-primary ml-1 " type="submit">Search</button>
        
    </div>
  </div>
</nav>

)
}
export default navbar;
