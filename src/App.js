import React from "react";
import "./App.css";
import Home from "./Screens/Home";
import Register from "./Screens/Register";
import Payment from "./Screens/Payment";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/register" exact component={Register} />
        <Route path="/payment" exact component={Payment} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
