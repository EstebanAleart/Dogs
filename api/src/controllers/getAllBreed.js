const axios=require("axios");

const URL="https://api.thedogapi.com/v1/breeds/"


const getAllBreed=async (req, res)=>{
    try {
        const response = await axios.get(URL);
        const breedSet = new Set(response.data.map((breed) => breed.breed_group));
        const uniqueBreeds = Array.from(breedSet);
        return res.status(200).json(uniqueBreeds);
      } catch (error) {
        return res.status(500).send(error.message);
      }
}

module.exports= getAllBreed;