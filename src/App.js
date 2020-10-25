import React from "react";
import "./App.css";
import UseState from "./Containers/UseState";
import UseEffectWithoutSubscription from "./Containers/UseEffectWithoutSubscription";
import UseEffectWithDependency from "./Containers/UseEffectWithDependency";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

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
                <ul>
                  <li>
                    <Link to="/useEffect/noSubscription">useEffect without subscription</Link>

                  </li>
                  <li>
                    <Link to="/useEffect/subscription">useEffect with subscription</Link>
                  </li>
                  <li>
                    <Link to="/useEffect/dependency">useEffect with dependency</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/useState">
              <UseState/>
            </Route>
            <Route path="/useEffect/dependency">
              <UseEffectWithDependency/>
            </Route>
            <Route path="/useEffect/noSubscription">
              <UseEffectWithoutSubscription/>
            </Route>
            {/* <Route path="/useEffect">
              <UseEffect/>
            </Route> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
