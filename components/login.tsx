"use client"; // This is a client component 👈🏽
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function login() {
  const [values, setValues] = useState({
    Name: "",
    password: "",
  });

  const handleInput = (event: { target: { name: any; value: any } }) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    axios
      .post("http://localhost:8000/message", values)
      .then((res) => {
        if (res.data === "Success") {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          }).then(function () {
            window.location.href = "/home";
          });
        } else {
          // alert("no existed");
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            // footer: 'Why do I have this issue?</a>'
          });
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
                      <label className="form-label float-start " htmlFor="Name">
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
                      <label className="form-label float-start" htmlFor="password">
                        password
                      </label>
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        name="password"
                        onChange={handleInput}
                      />
                    </div>
<br />
<br />
                    <button className="btn btn-outline-light btn-lg px-5  ">
                      Login
                    </button>
                  </form>
                 
                </div>

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default login;
