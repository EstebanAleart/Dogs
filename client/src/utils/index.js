

export function normalizeData(dog) {
  const kgToLbs=(kg)=> {
    return Math.ceil(kg * 2.20462);
  }
  
  const cmToInches =(cm)=> {
    return Math.ceil(cm * 0.393701);
  }
  return {
    id: dog.id,
    name: dog.name,
    image: dog.image,
    temperaments: dog.temperamentList || dog.temperaments,
    weight: {
      imperial: `${kgToLbs(dog.weight.min)} - ${kgToLbs(dog.weight.max)}`,
      metric: `${dog.weight.min} - ${dog.weight.max}`
    },
    height: {
      imperial: `${cmToInches(dog.height.min)} - ${cmToInches(dog.height.max)}`,
      metric: `${dog.height.min} - ${dog.height.max}`
    },
    life_span: dog.life_span
  };
}
