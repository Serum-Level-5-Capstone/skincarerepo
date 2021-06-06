import React from "react";
import { Link } from "react-router-dom";


//Onsubmit for survey and routed to Results component with the results. 
export default function Survey() {

  return (
    <div className="surveyForm">
      <form style={{ display: 'flex', flexDirection: "row", padding: "20px"}}>
        <Link to="/results/spring" style={{ textDecoration: 'none', paddingRight: "20px"}}><div className ="spring" value="Spring">Spring</div></Link>
        <Link to="/results/summer" style={{ textDecoration: 'none', paddingRight: "20px"}}><div className ="summer" value="Summer">Summer</div></Link>
        <Link to="/results/fall" style={{ textDecoration: 'none', paddingRight: "20px"}}><div className ="fall" value="Fall">Fall</div></Link>
        <Link to="/results/winter" style={{ textDecoration: 'none', paddingRight: "20px"}}><div className ="winter" value="Winter">Winter</div></Link>
      </form>
    </div>
  )
}


