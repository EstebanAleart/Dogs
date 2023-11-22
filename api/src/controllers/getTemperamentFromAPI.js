const axios=require("axios");
const {Temperament}=require("../db")
const saveInTemperamentDB= require("../handler/saveInTemperamentDB")

const URL="https://api.thedogapi.com/v1/breeds/"

const getTemperamentFomAPI= async (req, res)=>{
    
    try {
        const response = await axios.get(URL);
        responseData=response.data
        
        const breedSet = new Set(responseData.map((breed) => breed.temperament)
        .join(",").split(",").map(temp=>temp.trim()));
        
        const uniqueBreeds = Array.from(breedSet);
        await saveInTemperamentDB(uniqueBreeds)
        return res.status(200).json(uniqueBreeds) 
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
    
}


module.exports=getTemperamentFomAPI;