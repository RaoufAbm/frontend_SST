"use client"; // This is a client component 👈🏽
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'; 
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Link from "next/link";
import home from './page';

function App() {
  const [values, setValues] = useState({
    Name: "",
    password: "",
  });
  const navigator= useNavigate();
  // const [errors,setErrors] = useState({})
  const handleInput = (event: { target: { name: any; value: any; }; }) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    axios
      .post("http://localhost:8000/message", values)
      .then((res) => {
        if (res.data === "Success") {
            location.pathname = ('/about');

        } else {
          alert("no existed");
        }
        console.log(res);
      })

      .catch((err) => console.log(err));
  };
  return (

    <section className="vh-100 gradient-custom bg-white">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100"> 
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="Name">
                        Name
                      </label>
                      <input
                        type="Name"
                        className="form-control form-control-lg"
                        name="Name"
                        onChange={handleInput}
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="password">
                        password
                      </label>
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        name="password"
                        onChange={handleInput}
                      />
                    </div>

                    <button className="btn btn-outline-light btn-lg px-5">
                      Login
                    </button>
                    
                  </form>
                  <div className="d-flex justify-content-center text-center mt-4 pt-1">
                    <a href="#!" className="text-white">
                      <i className="fab fa-facebook-f fa-lg"></i>
                    </a>
                    <a href="#!" className="text-white">
                      <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                    </a>
                    <a href="#!" className="text-white">
                      <i className="fab fa-google fa-lg"></i>
                    </a>
                  </div>
                </div>

                <div>
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <a href="#!" className="text-white-50 fw-bold">
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
