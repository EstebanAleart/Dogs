const axios=require("axios");
const { Dog }=require("../db");
const {Op}=require("sequelize");

const URL="https://api.thedogapi.com/v1/breeds/search?q="

const getDogsByQuery=async (req,res)=>{
    try {
        const name=req.query.name
        const response= await axios.get(`${URL}${name}`)
       
        const responseData=response.data 
        const externalApi = responseData.map((dog) => {
            const { id, name, image, height, weight, life_span, breed_group } = dog
            return { id, name, image, height, weight, life_span, breed_group };
            
          });
          
          const dbResult = await Dog.findAll({
            where: {
              name: {
                [Op.iLike]: `%${name}%`,
              },
            },
          });
          

        
      
          const combined= [...externalApi,...dbResult]
      
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