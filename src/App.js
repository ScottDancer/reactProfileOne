import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import "./App.css";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="background">
      <div>
        <Router>
          <NavBar />

          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>

            <Route exact path="/portfolio">
              <Portfolio />
            </Route>

            <Route exact path="/contact">
              <Contact />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
