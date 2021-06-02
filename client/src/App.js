
import React from "react"
import { Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Results from "./components/Results"

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/"></Route>
        <Route exact path="/results/spring"><Results season={"spring"}/></Route>
        <Route exact path="/results/summer"><Results season={"summer"} /></Route>
        <Route exact path="/results/fall"><Results season={"fall"}/></Route>
        <Route exact path="/results/winter"><Results season={"winter"}/></Route>
      </Switch>
    </>
  ); 
}

export default App;
