import React from "react";
import "./App.css";
import UseState from "./Containers/UseState";
import UseEffectWithSubscription from "./Containers/UseEffectWithSubscription";
import UseEffectWithoutSubscription from "./Containers/UseEffectWithoutSubscription";
import UseEffectWithDependency from "./Containers/UseEffectWithDependency";
import CustomHooksExample1 from "./Containers/CustomHooksExample1";
import CustomHooksExample2 from "./Containers/CustomHooksExample2";
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
                useEffect
                <ul>
                  <li>
                    <Link to="/useEffect/noSubscription/noDependency">Simple useEffect</Link>

                  </li>
                  <li>
                    <Link to="/useEffect/subscription">useEffect with subscription</Link>
                  </li>
                  <li>
                    <Link to="/useEffect/dependency">useEffect with dependency</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/customHooks/example1">customHooks - example 1</Link>
              </li>
              <li>
                <Link to="/customHooks/example2">customHooks - example 2</Link>
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
            <Route path="/useEffect/noSubscription/noDependency">
              <UseEffectWithoutSubscription/>
            </Route>
            <Route path="/useEffect/subscription">
              <UseEffectWithSubscription/>
            </Route>
            <Route path="/customHooks/example1">
              <CustomHooksExample1/>
            </Route>
            <Route path="/customHooks/example2">
              <CustomHooksExample2/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
