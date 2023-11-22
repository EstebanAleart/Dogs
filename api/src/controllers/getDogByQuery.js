const axios=require("axios");



const URL="https://api.thedogapi.com/v1/breeds/search?q="

const getDogByQuery=async (req,res)=>{
    try {
        const {breed}=req.params;
        const response= await axios.get(`${URL}+${breed}`);
        const responseData=response.data 
        if(Array.isArray(responseData) && responseData.length > 0){
            const dogs=responseData.map(dog=>{
                return {id, name, image, height, weight, life_span, breed_group }=dog
            })
            return res.status(200).json(dogs)
        }else{
            res.status(404).json({error: "Not found"})
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports= getDogByQuery