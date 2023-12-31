import './App.css';

import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import LandingPage from "./views/landing/LandingPage";
import HomePage from "./views/HomePage";
import DetailPage from "./components/DetailPage";
import FormPage from "./components/FormPage";
import style from "./app.module.css";
import Navbar from "./components/NavBar/NavBar";
import Error404 from "./views/Error404/Error404"
import About from "../src/views/About/About"

function App() {
  const { pathname } = useLocation();
  return (
      <div className={style.container}>

{pathname === "/" ? null : (
  <div>
  <Navbar />
  </div>
  )}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/create" element={<FormPage />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/*" element={<Error404/>}/>
      </Routes>
    </div>
  );
}

export default App;
