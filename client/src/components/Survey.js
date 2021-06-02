import React, { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Context } from "./DataManager"

//Onsubmit for survey and routed to Results component with the results. 
export default function Survey() {

  // const [selectedSerum, setSelectedSerum] = useState([])

  const { serums, setSerums } = useContext(Context)

  // const handleFilter = e => {
  //   axios.get(`/serums/search/season?season=${e.target.value}`)
  //   .then(res => setSerums(res.data))
  //   .catch(err => console.log(err.response.data.errMsg))

  // };

  return (
    <>
      <form>
        <Link to="/results/spring"><div value="Spring">Spring</div></Link>
        <Link to="/results/summer"><div value="Summer">Summer</div></Link>
        <Link to="/results/fall"><div value="Fall">Fall</div></Link>
        <Link to="/results/winter"><div value="Winter">Winter</div></Link>
      </form>
    </>
  )
}


