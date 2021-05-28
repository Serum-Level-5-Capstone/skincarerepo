import {Switch, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <p>hi</p>

      //QUESTION: The survey and results will not be accessed on home page. Only on survey component and results. Does route below need to all live on one app? Or be specified inside the components I want them to display?
      {/* <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/survey"><Survey /></Route>
          <Route path="/Results"> <Results /></Route>
        </Switch>
          <Footer /> */}

    
    </div>
  );
}

export default App;
