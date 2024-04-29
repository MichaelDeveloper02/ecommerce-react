import { useState } from 'react'
import './style/App.css'
import {Helmet} from "react-helmet";

// Components
import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import Card from "./components/Card";

const App = ()=> {

  return (
    <>
     <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <title>E-commerce</title>
      </Helmet>
      {/* <Navbar/> */}
      <Hero/>
      <Card/>
    </>
  )
}

export default App
