import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import style from "./DetailPage.module.css";

function DetailPage() {
  const { id } = useParams();
  const [dog, setDog] = useState(null);

  useEffect(() => {
    const fetchDog = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/${id}`);
        const data = response.data;
        console.log(data[0]);
        setDog(data[0]);
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
      
      <h1>{dog.name}</h1>
      <h2>{dog.temperament}</h2>
      <p>Weight (Imperial): {dog.weight ? dog.weight.imperial : 'N/A'}</p>
      <p>Weight (Metric): {dog.weight ? dog.weight.metric : 'N/A'}</p>
      <p>Height (Imperial): {dog.height ? dog.height.imperial : 'N/A'}</p>
      <p>Height (Metric): {dog.height ? dog.height.metric : 'N/A'}</p>
      <p>{dog.life_span}</p>
    </div>
  );
}

export default DetailPage;