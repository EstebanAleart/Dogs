const {Dog}=require("../db");

const postDog= async (req, res)=>{
    try {
        const { name, image,height_max, height_min ,weight_max, weight_min , life_span, temperamentList}= req.body
        const offset=264;
    if ( !name || !height_max || !height_min || !weight_max || !weight_min || !life_span || !image ||!temperamentList ) {
        return res.status(401).json({ error: "Undefined data" });
      }
      const [newDog, created] = await Dog.findOrCreate({
        where: {  name:name.trim(), height_min, height_max , weight_min,weight_max, image, life_span, temperamentList},
      }); 
      await Dog.update({ id: newDog.id + offset }, { where: { id: newDog.id } });
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