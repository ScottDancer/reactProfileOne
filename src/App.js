import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./pages/Home";
import style from "./App.css"

function App() {
  return (
   <div className = "background">
   <div>
      <NavBar />
      {" "}
      <Router>
        {" "}
        <Switch>
          {" "}
          <Route exact path="/home">
             <Home />
            {" "}
          </Route>
          {" "}
          <Route exact path="/portfolio">
             <h1>Portfolio</h1>
            {" "}
          </Route>
          {" "}
          <Route exact path="/contact">
             <h1>Contact</h1>
            {" "}
          </Route>
          {" "}
          <Route exact path="/">
             <Home />
            {" "}
          </Route>
          {" "}
        </Switch>
        {" "}
      </Router>
    </div>
    </div>
  );
}

export default App;
