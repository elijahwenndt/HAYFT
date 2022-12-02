import { useState, useEffect } from "react";
import React from "react";
import Navbar from "./Navbar"
import HomePage from "./Homepage";

export default function App() {
  const [page, setPage] = useState("Home");

  function handleClick(text) {
    setPage(text);
  }
  if (page === "Home") {
    return <HomePage />;
  }
  return (
    <>
      {/* <Navbar /> */}

    </>
  )
}


