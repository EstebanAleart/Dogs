import React from "react";
import Cards from "../components/Cards/Cards.jsx";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import  {getDogs} from "../Redux/actions.js";
import style from "./HomePage.module.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs); 

  useEffect(() => {
    dispatch(getDogs());

  }, [dispatch]);

  return (
    <div className={style.container}>
      <h1>Welcome to the Home Page</h1>
      <Cards allDogs={allDogs}/>
    </div>
  );
};

export default HomePage;
