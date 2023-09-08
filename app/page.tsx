"use client"; // This is a client component 👈🏽

import { BrowserRouter } from "react-router-dom";
import Login from "./login";
import React from "react";


function home() {
 
  return (
    <React.StrictMode>
     <BrowserRouter>
    {/* <Home/> */}
    <Login/>

    </BrowserRouter>
    </React.StrictMode>

  );
}

export default home;
