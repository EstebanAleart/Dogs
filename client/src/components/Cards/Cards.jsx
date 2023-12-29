import React from "react";
import Card from "../Card/Card.jsx";
import style from "./Cards.module.css";
// import {normalizeData, kgToLbs,cmToInches } from "../../utils/index.js";

// function normalizeData(dog) {
//   return {
//     id: dog.id,
//     name: dog.name,
//     image: dog.image,
//     temperaments: dog.temperamentList || dog.temperaments,
//     weight: dog.weight_min && dog.weight_max ? dog.weight_min + '-' + dog.weight_max : dog.weight,
//     height: dog.height_min && dog.height_max ? dog.height_min + '-' + dog.height_max : dog.height,
//     life_span: dog.life_span
//   };
// }
// function kgToLbs(kg) {
//   return Math.ceil(kg * 2.20462);
// }

// function cmToInches(cm) {
//   return Math.ceil(cm * 0.393701);
// }

// function normalizeData(dog) {
//   return {
//     id: dog.id,
//     name: dog.name,
//     image: dog.image,
//     temperaments: dog.temperamentList || dog.temperaments,
//     weight: {
//       imperial: `${kgToLbs(dog.weight_min)} - ${kgToLbs(dog.weight_max)}`,
//       metric: `${dog.weight_min} - ${dog.weight_max}`
//     },
//     height: {
//       imperial: `${cmToInches(dog.height_min)} - ${cmToInches(dog.height_max)}`,
//       metric: `${dog.height_min} - ${dog.height_max}`
//     },
//     life_span: dog.life_span
//   };
// }

const Cards = ({allDogs}) => {
  
  
  return (
    <div className={style.container}>
    {Array.isArray(allDogs) && allDogs.map((dog)=>(
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
