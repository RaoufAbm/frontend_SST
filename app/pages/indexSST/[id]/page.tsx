"use client";
import Carburant from "@/components/carburant";
import React, { useEffect, useState } from "react";
import TableCarburant from "@/components/table_carburant";
import Link from "next/link";

function indexSST({params}) {
  

    
    const  ID =  params.id;


 
  return (
    <>
   
    <TableCarburant idCuve={ID}  />
    </>
         
    );
  }

export default indexSST;

