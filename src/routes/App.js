// import Libraries
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// import Components
import Home from "../containers/Home";

const App = () => {
  render();
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  );
};

export default App;
