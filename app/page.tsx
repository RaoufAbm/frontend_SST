// "use client";
import Login from "@/components/login";
// import { useEffect, useState } from "react";
// import ClipLoader from "react-spinners/ClipLoader";

function login() {
// const [loading,setLoading]=useState(false)
// useEffect(()=>{
//   setLoading(true)
//   setTimeout(() => {
//     setLoading(false)
//   }, 1500);
// })
  return (
       <>
       {/* {
        loading?
        <ClipLoader
        color={"black"}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      : */}
        <Login/>
       {/* } */}
       </>

  );
}
export default login;
