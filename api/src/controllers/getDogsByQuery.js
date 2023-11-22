const axios=require("axios");

const URL="https://api.thedogapi.com/v1/breeds/search?q="

const getDogsByQuery=async (req,res)=>{
    try {
        const name=req.query.name
        
        const response= await axios.get(`${URL}${name}`)
       
        const responseData=response.data 
        const externalApi = responseData.map((dog) => {
            return { id, name, image, height, weight, life_span, breed_group };
            
          });
      
          
      
          externalApi.length > 0
            ? res.status(200).json(externalApi)
            : res.status(404).json({ error: "Not Found" });

        
    } catch (error) {
        res.status(500).json({error:error.message})
    }

}

module.exports=getDogsByQuery