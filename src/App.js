import React from "react";
import { Route, Switch } from "react-router";
import Home from "./component/Home";
import "./style.css";
export default function App() {
  return (
    <Switch>
      <Route path='/' component={Home}/>
    </Switch>
  );
}
