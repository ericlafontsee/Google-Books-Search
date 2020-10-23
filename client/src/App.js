import React from "react";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <div>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Search} />
          <Route exact path={process.env.PUBLIC_URL + "/books"} component={Search} />
          <Route exact path={process.env.PUBLIC_URL + "/books/:id"} component={Saved} />
          <Route path={process.env.PUBLIC_URL + "*"} component={Search} /> 
        <Books />
        </Switch>
      </div>
      </Router>
  );
}

export default App;
