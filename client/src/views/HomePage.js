import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDogs } from "../Redux/actions.js";
import style from "./HomePage.module.css";
import Cards from "../components/Cards/Cards.jsx";





const HomePage = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs);
  const filteredDogs = useSelector((state) => state.filteredDogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const dogsPerPage = 8;

  useEffect(() => {
    dispatch(getDogs())
      .then(() => setLoading(false))
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [dispatch]);

  //auxiliares paginado
  const indexOfLastDog = currentPage * dogsPerPage;
  
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  
  const dogsToDisplay = filteredDogs.length > 0 ? filteredDogs : allDogs;
  const currentDogs = dogsToDisplay.slice(indexOfFirstDog, indexOfLastDog);

  // navegacion paginado
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pages = Math.ceil(dogsToDisplay.length / dogsPerPage);
  const buttons = [];
  
  for (let i = 0; i < pages; i++) {
    buttons.push(
      <button style={{
        backgroundColor: "rgb(255, 160, 17)", 
        color: "white",
        border: "none",
        borderRadius: "5px",
        padding: "10px",
        fontSize: "1rem",
        cursor: "pointer",
        gap: "10px",
        margin: "10px",
      }} key={i} onClick={() => handlePageChange(i + 1)}>
        {i + 1}
      </button>
    );
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  

  return (
    <div className={style.container}>

      <Cards allDogs={currentDogs} />
      <div  >
        {buttons}
      </div>
    </div>
  );
};

export default HomePage;
