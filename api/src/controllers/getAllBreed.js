const axios=require("axios");
const {API_KEY}=process.env;
const URL="https://api.thedogapi.com/v1/breeds/"


const getAllBreed= async (req, res)=>{
  // ${API_KEY}
    try {
        const response = await axios.get(`${URL}`);
        const responseData=response.data
        
        const externalApi = responseData.map((dog) => {
          const { id, name, image, height, weight, life_span, breed_group, temperament } = dog;
          let temperaments = [];
          if (temperament) {
          temperaments = Array.from(temperament.split(",").map((temp) => temp.trim()));
          }
          return { id, name, image, height, weight, life_span, breed_group, temperaments };
        });
        
        externalApi.length > 0 ? res.status(200).json(externalApi) : res.status(404).json({ error: "Not Found" });
      } catch (error) {
        return res.status(500).send(error.message);
      }
}

module.exports= getAllBreed;