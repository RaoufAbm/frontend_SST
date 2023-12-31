"use client"; // This is a client component 👈🏽
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import axios from "axios";
import { useData } from "@/context/dataUser";
import Swal from "sweetalert2";

function Login() {
  const [values, setValues] = useState({
    Name: "",
    Password: "",
  });
  const {setDataUser}=useData();

  const handleInput = (event: { target: { name: any; value: any } }) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    axios.post("https://cdd.dzkimtech.com/login",values)
      .then((res) => {            

        if (res.data.length === 1 && res.status === 200) {
          setDataUser(res.data);
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Connexion réussie.",
            showConfirmButton: false,
            timer: 1500,
          }).then(function () {
            if (res.data[0].IDStation===0) {
              window.location.href = "/station";
              
            }
            else{
              window.location.href = `/home/${res.data[0].IDStation}`;

            }
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
        // console.log(res);
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
                    <div className="form-outline form-white mb-4 ">
                      <label className="form-label  " htmlFor="Name">
                        {/* Name */}
                      </label>
                      <input
                        type="Name"
                        className="form-control form-control-lg"
                        name="Name"
                        placeholder="Name"
                        onChange={handleInput}
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <label
                        className="form-label float-start"
                        htmlFor="Password"
                      >
                        {/* Password */}
                      </label>
                      <input
                        placeholder="Password"
                        type="Password"
                        className="form-control form-control-lg"
                        name="Password"
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

export default Login;
function setValues(arg0: (prev: any) => any) {
  throw new Error("Function not implemented.");
}

