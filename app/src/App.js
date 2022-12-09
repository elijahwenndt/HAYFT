import { useState, useEffect } from "react";
import React from "react";
import { Outlet } from "react-router-dom";
import NavBarRR from "./components/NavbarRR";
import Home from "./components/Home";
import { GlobalProvider } from './context/GlobalState';

export default function App() {

  // const [page, setPage] = useState("Home");

  // console.log(page)
  // function handleClick(text) {
  //   setPage(text);
  // }
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
  
  return (
    <>
    <GlobalProvider>
      <NavBarRR />
      <h1>{process.env.REACT_APP_MYENVVAR}</h1>
      <Outlet />
    </GlobalProvider>
    </>
  )
}


