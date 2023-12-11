import './App.css';

import React from "react";

import { Route, Switch } from "react-router-dom";
import LandingPage from "./views/landing/LandingPage";
import HomePage from "./views/HomePage";
import DetailPage from "./components/DetailPage";
import FormPage from "./components/FormPage";

function App() {
  return (
    <Switch>
    <Route exact path='/' component={LandingPage} />
    <Route exact path='/home' component={HomePage} />
    <Route exact path='/detail/:id' component={DetailPage} />
    <Route exact path='/create' component={FormPage} /> 
    </Switch>   
  );
}

export default App;
