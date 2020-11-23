import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./pages/Home";

function App() {
  return (
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
          <Route exact path="/profile">
             <h1>Profile</h1>
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
  );
}

export default App;
