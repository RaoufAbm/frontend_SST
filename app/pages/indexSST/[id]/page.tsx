"use client";

import React from 'react'
import { useCuveURL } from "@/context/idCuveURL";

function page() {
  const { IdCuveURL } = useCuveURL();
  return (
    <>
    <h1>{IdCuveURL}</h1>
    </>
  )
}

export default page