import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import style from "./DetailPage.module.css";

function kgToLbs(kg) {
  return Math.ceil(kg * 2.20462);
}

function cmToInches(cm) {
  return Math.ceil(cm * 0.393701);
}

function normalizeData(dog) {
  return {
    id: dog.id,
    name: dog.name,
    image: dog.image,
    temperaments: dog.temperamentList || dog.temperaments,
    weight: {
      imperial: `${kgToLbs(dog.weight_min)} - ${kgToLbs(dog.weight_max)}`,
      metric: `${dog.weight_min} - ${dog.weight_max}`
    },
    height: {
      imperial: `${cmToInches(dog.height_min)} - ${cmToInches(dog.height_max)}`,
      metric: `${dog.height_min} - ${dog.height_max}`
    },
    life_span: dog.life_span
  };
}



function DetailPage() {
  const { id } = useParams();
  const [dog, setDog] = useState(null);

  useEffect(() => {
    const fetchDog = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/${id}`);
        const data = response.data;
        let normalizedData;
      if (Array.isArray(data)) {
        normalizedData = data[0];
      }else if(typeof data === 'object' && data !== null){
        normalizedData = normalizeData(data);
      }
        setDog(normalizedData);
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchDog();
  }, [id]);

  if (!dog) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.container}>
      <div>
      <img className={style.img} src={dog.image} alt={dog.name} />
      </div>
      <div >
      <h1>{dog.name}</h1>
      <h4>{dog.temperaments}</h4>
      <p>Weight (Imperial): {dog.weight ? dog.weight.imperial : null }</p>
      <p>Weight (Metric): {dog.weight ? dog.weight.metric : null }</p>
      <p>Height (Imperial): {dog.height ? dog.height.imperial : null }</p>
      <p>Height (Metric): {dog.height ? dog.height.metric : null }</p>
      <p>{dog.life_span}</p>
      </div>
    </div>
  );
}

export default DetailPage;