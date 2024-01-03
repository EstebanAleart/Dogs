import React from "react";
import img from "../Error404/error.jpg"
import style from "../Error404/Error404.module.css"

const Error404 = () => {
    return (
      <div className={style.container} >
        <h1>404 - Not Found</h1>
        <p>Oops! The page you are looking for might be unavailable.</p>
        <img className={style.img} src={img} alt="404 error image" />
      </div>
    );
  }
  
  export default Error404;