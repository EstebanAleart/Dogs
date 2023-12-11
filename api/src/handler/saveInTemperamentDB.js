const {Temperament}=require("../db");

const saveInTemperamentDB=async (array)=>{
 try {
    for (let temp of array){
        
        await Temperament.findOrCreate({
            where:{name:temp}
        })
    }
 } catch (error) {
    console.error('Error saving temperaments to database:', error.message)
 }
};


module.exports=saveInTemperamentDB