import React from "react";
import Card from "../Card/Card.jsx";
import style from "./Cards.module.css";

const Cards = ({allDogs}) => {
  
  const dogList=allDogs;
  console.log("dogList", dogList)
  return (
    <div className={style.container}>
    {dogList?.map((dog)=>(
      <Card
      key={dog.id}
      id={dog.id}
      name={dog.name} 
      image={dog.image}
      temperaments={dog.temperaments.join(",")}
      weight={dog.weight}
      height={dog.height} 
      life_span={dog.life_span}
      />  
      ))}  
      </div>
  );
};

export default Cards;
