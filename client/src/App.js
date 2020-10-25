import React from "react";
import "./app.css";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <div>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Search} />
          <Route exact path={process.env.PUBLIC_URL + "/saved"} component={Saved} />
          <Route path={process.env.PUBLIC_URL + "*"} component={Search} /> 
        </Switch>
      </div>
      </Router>
  );
}

export default App;
