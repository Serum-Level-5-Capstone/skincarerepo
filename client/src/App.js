
import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./componets/Home"
import Navbar from "./components/Navbar"
import MyCart from "./components/MyCart"

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <MyCart />
    </>
  );
}

export default App;
