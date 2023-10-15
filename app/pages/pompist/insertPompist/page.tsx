import Link from "next/link";
import React from 'react'
import styles from "/app/page.module.css";

    function addUsers() {
      return (
      
          <div className='col w-50 ' style={{marginLeft:"25%"}} >
    
          <h1 className='pt-5  text-primary'>Nouveau pompiste</h1>
      <div className="group mt-5">
        <label htmlFor="inputEmail3" className={styles.label}>Nom</label>
          <input type="text" className="form-control" id="" />
      </div>
      <div className="group  mt-2">
        <label htmlFor="inputPassword3" className={styles.label}>Prenom</label>
          <input type="text" className="form-control" id="" />
      </div>
      <div className="group  mt-2">
        <label htmlFor="inputPassword3" className={styles.label}>Date_de_nessance</label>
          <input type="date" className="form-control" id="" />
      </div>
      <div className="group  mt-2">
        <label htmlFor="inputPassword3" className={styles.label}>Date_de_recretement</label>
          <input type="date" className="form-control" id="" />
      </div>
      <div className="group  mt-2">
        <label htmlFor="inputPassword3" className={styles.label}>date_de_sortie</label>
          <input type="date" className="form-control" id="" />
      </div>
    
      
      
      <Link href="/pages/pompist">
      <button type="submit" className="btn btn-success col mt-3">Validez</button>
      </Link>
    </div>
 
    
    );
    }
    
    export default addUsers;
