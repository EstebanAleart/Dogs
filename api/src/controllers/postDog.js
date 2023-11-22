const {Dog}=require("../db");

const postDog= async (req, res)=>{
    try {
        const { name, image, height, weight, life_span}= req.body
    if ( !name || !height || !weight || !life_span || !image ) {
        return res.status(401).json({ error: "Undefined data" });
      }
      const [newDog, created] = await Dog.findOrCreate({
        where: {  name, height, weight, image, life_span },
      });
      if (!created) {
        return res.status(409).json({ error: "This dog exist in DB" });
      }
  
      const allDogs = await Dog.findAll();
      return res.status(200).json(allDogs);
    } catch (error) {
        return res.status(500).json({error: error.message})
    }

    

}

module.exports=postDog