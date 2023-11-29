const axios=require("axios");
const {Dog}= require("../db")
const {Op}=require("sequelize")


const URL="https://api.thedogapi.com/v1/breeds/"

const getDogByidRaza=async (req,res)=>{
    try {
        const {idRaza}=req.params; 
        const response= await axios.get(`${URL}${idRaza}`);
        let responseData = response.data
        
        !Array.isArray(responseData) ? responseData=[responseData] : new Error('Invalid response format from the API')
        const dogs=responseData.map(dog=>{
                return {id, name, image, height, weight, life_span, breed_group }=dog
                     })
            
            const dogFromDb = await Dog.findByPk(idRaza);
            const combined = dogFromDb ? [...dogs, dogFromDb] : dogs;

            combined ? res.status(200).json(combined) : res.status(404).json({error: "Not found"})
       
            
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports= getDogByidRaza