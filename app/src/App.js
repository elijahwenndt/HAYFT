import { useState, useEffect } from "react";
import React from "react";
import Navbar from "./Navbar"
import HomePage from "./Homepage";
import Postpage from "./Postpage"
import { GlobalProvider } from './context/GlobalState';

export default function App() {

  const [page, setPage] = useState("Home");

  console.log(page)
  function handleClick(text) {
    setPage(text);
  }
  // if (page === "Home") {
  //   return (
  //     // <GlobalProvider>
  //     <HomePage handleClick={handleClick}/>
  //     // </GlobalProvider>
  //   );
  // }
  // if (page === "YourJourney") {
  //   return (
  //     // <GlobalProvider>
  //     <Postpage handleClick={handleClick}/>
  //     // </GlobalProvider>
  //     );
  }
  return (
    <>
      
    </>
  )
}


