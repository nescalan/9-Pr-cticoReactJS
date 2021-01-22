// import Libraries
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import Components
import Home from "../containers/Home";
import Login from "../components/Login";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default App;