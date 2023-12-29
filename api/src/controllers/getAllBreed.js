const axios = require("axios");
const { Dog } = require("../db");
const normalizeData=require("../handler/normalizeData");
const { API_KEY } = process.env;
const URL = "https://api.thedogapi.com/v1/breeds/";
 

const getAllBreed = async (req, res) => {
  try {
    const response = await axios.get(`${URL}${API_KEY}`);
    const responseData = response.data;

    const externalApi = responseData.map((dog) => {
      const { id, name, image, height, weight, life_span, breed_group, temperament } = dog;
      let temperaments = [];
      if (temperament) {
        temperaments = Array.from(temperament.split(",").map((temp) => temp.trim()));
      }
      return { id, name, image, height, weight, life_span, breed_group, temperaments };
    });

    
    const dogsFromDatabase = await Dog.findAll();
    const normalizedDogsFromDatabase = dogsFromDatabase.map(dog => normalizeData(dog));
  
    const allDogs = [...externalApi, ...normalizedDogsFromDatabase];

    allDogs.length > 0 ? res.status(200).json(allDogs) : res.status(404).json({ error: "Not Found" });
    } catch (error) {
    return res.status(500).send(error.message);
    }
  };

module.exports = getAllBreed;
        
        