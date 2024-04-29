import { useState } from 'react'
import './style/App.css'
import {Helmet} from "react-helmet";

// Components
import Hero from "./components/Hero";
import Card from "./components/Card";
import Categories from "./components/Categories";
import HomeStore from "./components/homeStore";

const App = ()=> {

  return (
    <>
     <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <title>E-commerce</title>
      </Helmet>
      <Hero/>
      <Card/>
      <Categories/>
      <HomeStore/>
    </>
  )
}

export default App
