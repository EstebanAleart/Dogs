const axios=require("axios");

const URL="https://api.thedogapi.com/v1/breeds/"


const getAllBreed= async (req, res)=>{
    try {
        const response = await axios.get(URL);
        const responseData=response.data
        const externalApi = responseData.map((dog) => {
          return { id, name, image, height, weight, life_span, breed_group }=dog;
          
        });
        
        externalApi.length > 0 ? res.status(200).json(externalApi) : res.status(404).json({ error: "Not Found" });
      } catch (error) {
        return res.status(500).send(error.message);
      }
}

module.exports= getAllBreed;