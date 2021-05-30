import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { Context } from "./DataManager"

//Onsubmit for survey and routed to Results component with the results. 
export default function Survey() {

  const [selectedSerum, setSelectedSerum] = useState([])

  const { serums, setSerums } = useContext(Context)

  const handleSubmit = e => {
    setSerums(selectedSerum)
  };

  return (
    <>
      <form>
        <Link to="/Results"><div onClick={handleSubmit}>Spring</div></Link>
        <Link to="/Results"><div onClick={handleSubmit}>Summer</div></Link>
        <Link to="/Results"><div onClick={handleSubmit}>Fall</div></Link>
        <Link to="/Results"><div onClick={handleSubmit}>Winter</div></Link>
      </form>
    </>
  )
}


