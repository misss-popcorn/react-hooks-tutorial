import "./App.css";
import UseState from "./UseState";
import UseEffect from "./UseEffect";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/useState">useState</Link>
              </li>
              <li>
                <Link to="/useEffect">useEffect</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/useState">
              <UseState />
            </Route>
            <Route path="/useEffect">
              <UseEffect />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
