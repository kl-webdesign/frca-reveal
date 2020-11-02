import React from "react";
import "./App.css";
import Home from "./Screens/Home";
import Register from "./Screens/Register";
import Payment from "./Screens/Payment";
import Success from "./Screens/Success";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Forgot from "./Screens/Forgot";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={Register} />
        <Route path="/payment" exact component={Payment} />
        <Route path="/success" exact component={Success} />
        <Route path = "/forgot" exact component={Forgot}/>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
