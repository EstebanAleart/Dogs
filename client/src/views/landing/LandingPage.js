import React from "react";
import { Link } from "react-router-dom";
import landingPro from "./landing pro.jpg";
import logoHenry from "./logoHenry.png";
import style from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={style.container}>
      <span className={style.containerTitle}>
      <a href="https://ref-students.soyhenry.com/fb165724-c776-44d4-8f5b-c6ac5c5ff004">
          <img className={style.logo} src={logoHenry} alt="soyHenry" />
        </a>
        <h1 className={style.title}>Dog PI</h1>
      </span>
      <div className={style.container2}>
        <img className={style.img} src={landingPro} alt="Dog Image" />
        <Link to="/home"><button className={style.button}> Home </button></Link>
      </div>
    </div>
  );
};

export default LandingPage;
