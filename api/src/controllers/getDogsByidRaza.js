const axios=require("axios");
const {Dog}= require("../db")
const { API_KEY } = process.env;
const URL = "https://api.thedogapi.com/v1/breeds/";



const getDogByidRaza=async (req,res)=>{
    try {
        const {idRaza}=req.params; 

        const dogFromDb = await Dog.findByPk(idRaza);
        if (dogFromDb) {
        return res.status(200).json(dogFromDb);
        }

        const response= await axios.get(`${URL}${idRaza}`);
        let responseData = response.data
        
        !Array.isArray(responseData) ? responseData=[responseData] : new Error('Invalid response format from the API')
        const dogs = await Promise.all(responseData.map(async dog => {
            const imageResponse = await axios.get(`https://api.thedogapi.com/v1/images/${dog.reference_image_id}${API_KEY}`);
            const imageUrl = imageResponse.data.url;
            return {
                id: dog.id,
                name: dog.name,
                image: imageUrl,
                height: dog.height,
                weight: dog.weight,
                life_span: dog.life_span,
                breed_group: dog.breed_group,
                temperaments:dog.temperament.split(","),
            };
        }));
            
            
        if (dogs.length > 0) {
            return res.status(200).json(dogs);
        }else {
                return res.status(404).json({ error: "Not found" });
              }
       
            
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports= getDogByidRaza