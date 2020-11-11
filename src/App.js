import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ="/home">
          <Home />
        </Route>
        <Route exact path ="/profile">
          <h1>Profile</h1>
        </Route>
        <Route exact path ="/contact">
          <h1>Contact</h1>
        </Route>
        <Route exact path ="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;


