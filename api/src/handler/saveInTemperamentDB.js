const {Temperament}=require("../db");

const saveInTemperamentDB=async (array)=>{
 try {
    for (let a of array){
        
        await Temperament.findOrCreate({
            where:{name:a}
        })
    }
 } catch (error) {
    console.error('Error saving temperaments to database:', error.message)
 }
};


module.exports=saveInTemperamentDB