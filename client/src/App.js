
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
          <Route path="/results/spring"><Results season="spring" /></Route>
          <Route path="/results/summer"><Results season="summer" /></Route>
          <Route path="/results/fall"><Results season="fall" /></Route>
          <Route path="/results/winter"><Results season="winter" /></Route>
        </Switch>
     
    </>
  );
}

export default App;
