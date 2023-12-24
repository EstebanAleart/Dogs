import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";


const Card = (props) => {
  const { id, name, image, temperaments, weight, height, life_span } = props;
  
  return (
  <div className={style.card}>
    <div className={style.div1}>
      <Link to={`/detail/${id} `} className={style.link}>
      <h4 className={style.id}>{id}</h4>
      </Link> 
      <h2>{name}</h2>
      <img src={image.url} alt="dog" className={style.img} />
      <p className={style.p}>{temperaments}</p>
      {/* <p>Weight (Imperial): {weight.imperial}</p>
      <p>Weight (Metric): {weight.metric}</p>
      <p>Height (Imperial): {height.imperial}</p>
      <p>Height (Metric): {height.metric}</p>
      <p>{life_span}</p> */}
    </div>
  </div>)
};

export default Card;
