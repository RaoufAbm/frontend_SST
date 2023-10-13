import Link from "next/link";
import React from 'react'

    function addUsers() {
      return (
      
          <div className=''>
    
          <h1 className='pt-5  text-primary'>Nouveau pompiste</h1>
        <div className=''>
      <div className="row mb-3 mt-5">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Nom</label>
        <div className="col-sm-5">
          <input type="text" className="form-control" id="" />
        </div>
      </div>
      <div className="row mb-3 mt-1">
        <label htmlFor="inputPassword3" className="col-sm-2  col-form-label">Prenom</label>
        <div className="col-sm-5">
          <input type="text" className="form-control" id="" />
        </div>
      </div>
      <div className="row mb-3 mt-1">
        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Date_de_nessance</label>
        <div className="col-sm-5">
          <input type="date" className="form-control" id="" />
        </div>
      </div>
      <div className="row mb-3 mt-1">
        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Date_de_recretement</label>
        <div className="col-sm-5">
          <input type="date" className="form-control" id="" />
        </div>
      </div>
      <div className="row mb-3 mt-1">
        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">date_de_sortie</label>
        <div className="col-sm-5">
          <input type="date" className="form-control" id="" />
        </div>
      </div>
      <div className="row mb-3 mt-1">
        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">ID_Station</label>
        <div className="col-sm-5">
          <input type="text" className="form-control" id=""  disabled/>
        </div>
      </div>
      
      
      <Link href="/pages/pompist">
      <button type="submit" className="btn btn-success ml-5">Validez</button>
      </Link>
    </div>
    </div>
 
    
    );
    }
    
    export default addUsers;
