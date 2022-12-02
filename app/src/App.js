import { useState, useEffect } from "react";
import React from "react";
import Navbar from "./Navbar"

export default function App() {
  const [page, setPage] = useState("Home");

  function handleClick(text) {
    setPage(text);
  }
  return (
    <>
      <Navbar />
    </>
  )
}


