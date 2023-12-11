import React from "react";
import style from "./Card.module.css";



const Card = (props) => {
  const { id, name, image, temperaments, weight, height, life_span } = props;
  
  return (
  <div className={style.card}>
    <div >
      <h2>{name}</h2>
      <h4>{id}</h4>
      <img src={image.url} alt="dog" className={style.img} />
      {/* <p className={style.p}>{temperaments}</p> */}
      <p>Weight (Imperial): {weight.imperial}</p>
      <p>Weight (Metric): {weight.metric}</p>
      {/* <p>Height (Imperial): {height.imperial}</p>
      <p>Height (Metric): {height.metric}</p>
      <p>{life_span}</p> */}
    </div>
  </div>)
};

export default Card;
