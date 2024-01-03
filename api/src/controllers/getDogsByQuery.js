const axios=require("axios");
const { Dog }=require("../db");
const normalizeData=require("../handler/normalizeData");
const {Op}=require("sequelize");
const { API_KEY } = process.env;


const URL="https://api.thedogapi.com/v1/breeds/search?q="

const getDogsByQuery=async (req,res)=>{
    try {
        const name=req.query.name
        const response= await axios.get(`${URL}${name}`)
       
        const responseData=response.data 
        const externalApi = await Promise.all(responseData.map(async dog => {
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
        // responseData.map((dog) => {
        //     const { id, name, image, height, weight, life_span, breed_group } = dog
        //     return { id, name, image, height, weight, life_sparn, breed_group };
            
        //   });
          
          const dbResult = await Dog.findAll({
            where: {
              name: {
                [Op.iLike]: `%${name}%`,
              },
            },
          });

          const dbNormalized= dbResult.map(norm=>normalizeData(norm))
          

        
      
          const combined= [...externalApi,...dbNormalized]
      
          combined.length > 0 ? res.status(200).json(combined) : res.status(404).json({ error: "Not Found" });

        
    } catch (error) {
        res.status(500).json({error:error.message})
    }

}


// const getDogsByQuery = (req, res) => {
//     const name = req.query.name;
  
//     axios.get(`${URL}${name}`)
//       .then((response) => {
//         const responseData = response.data;
//         const externalApi = responseData.map((dog) => {
//           const { id, name, image, height, weight, life_span, breed_group } = dog;
//           return { id, name, image, height, weight, life_span, breed_group };
//         });
  
//         return Dog.findAll({
//           where: {
//             name: {
//               [Op.iLike]: `%${name}%`,
//             },
//           },
//         });
//       })
//       .then((dbResult) => {
//         const combined = [...externalApi, ...dbResult];
//         combined.length > 0 ? res.status(200).json(combined) : res.status(404).json({ error: "Not Found" });
//       })
//       .catch((error) => {
//         res.status(500).json({ error: error.message });
//       });
//   };
  
 
  
module.exports=getDogsByQuery