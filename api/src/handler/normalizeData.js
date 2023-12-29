
const normalizeData=(dog)=> {
    const kgToLbs=(kg)=> {
      return Math.ceil(kg * 2.20462);
    }
    
    const cmToInches =(cm)=> {
      return Math.ceil(cm * 0.393701);
    }
    return {
      id: dog.id,
      createdInDb: true,
      name: dog.name,
      image: dog.image,
      temperaments: dog.temperamentList || dog.temperaments,
      weight: {
        imperial: `${kgToLbs(dog.weight_min)} - ${kgToLbs(dog.weight_max)}`,
        metric: `${dog.weight_min} - ${dog.weight_max}`
      },
      height: {
        imperial: `${cmToInches(dog.height_min)} - ${cmToInches(dog.height_max)}`,
        metric: `${dog.height_min} - ${dog.height_max}`
      },
      life_span: dog.life_span
    };
  }

  module.exports=normalizeData;