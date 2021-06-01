import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { Context } from "./DataManager"

//Onsubmit for survey and routed to Results component with the results. 
export default function Survey() {

  // const [selectedSerum, setSelectedSerum] = useState([])

  const { serums, setSerums } = useContext(Context)

  const handleFilter = e => {
    axios.get(`/serums/search/season?season=${e.target.value}`)
    .then(res => setSerums(res.data))
    .catch(err => console.log(err.response.data.errMsg))

  };

  return (
    <>
      <form>
        <Link to="/Results"><div value="Spring" onClick={handleFilter}>Spring</div></Link>
        <Link to="/Results"><div value="Summer" onClick={handleFilter}>Summer</div></Link>
        <Link to="/Results"><div value="Fall" onClick={handleFilter}>Fall</div></Link>
        <Link to="/Results"><div value="Winter" onClick={handleFilter}>Winter</div></Link>
      </form>
    </>
  )
}


