import { useState, useEffect } from "react";
import React from "react";
import Navbar from "./Navbar"
import HomePage from "./Homepage";
import Postpage from "./Postpage"
export default function App() {
  const [page, setPage] = useState("Home");
  console.log(page)
  function handleClick(text) {
    setPage(text);
  }
  if (page === "Home") {
    return <HomePage handleClick={handleClick}/>;
  }
  if (page === "YourJourney") {
    return <Postpage handleClick={handleClick}/>;
  }
  return (
    <>
      {/* <Navbar handleClick={handleClick}/>
     if (page === "Home") {
     return <HomePage />;
   } */}
    </>
  )
}


