import { ALL_DOGS, NEW_DOG, ORDER_DOGS_BY_NAME, DOGS_BY_NAME, ORDER_DOGS_BY_WEIGHT, GET_TEMPERAMENTS, FILTER_DOGS_BY_TEMPERAMENT, FILTER_DOGS_BY_ORIGIN} from "./actions";

const initialState = {
  allDogs: [],
  temperaments: [],
  filteredDogs: [],
};



const dogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_DOGS:
      return {
        ...state,
        allDogs: action.payload,
      };
    case NEW_DOG:
      return {
        ...state,
        allDogs: [...state.allDogs, action.payload],
      };
    case ORDER_DOGS_BY_NAME:
      if (action.payload === "Ascending") {
        return {
          ...state,
          allDogs: [
            ...state.allDogs.sort((a, b) => a.name.localeCompare(b.name)),
          ],
        };
      }
      if (action.payload === "Descending") {
        return {
          ...state,
          allDogs: [
            ...state.allDogs.sort((a, b) => b.name.localeCompare(a.name)),
          ],
        };
      }
      if (action.payload === ".....") {
        return {
          ...state,
          allDogs: [...state.allDogs.sort((a, b) => a.id - b.id)],
        };
      }
      case ORDER_DOGS_BY_WEIGHT:
    let sortedDogs = [...state.allDogs];
    if (action.payload === "All") {
      return {
        ...state,
        allDogs: [...sortedDogs.sort((a, b) => a.id - b.id)],
      };
    }

    sortedDogs.sort((a, b) => {
    const weightA = a.weight.metric.split("-").reduce((acc, cur) => acc + parseInt(cur), 0) / 2;
    const weightB = b.weight.metric.split("-").reduce((acc, cur) => acc + parseInt(cur), 0) / 2;

    if (action.payload === "AscendingWeight") {
      return weightA - weightB;
    }
    if (action.payload === "DescendingWeight") {
      return weightB - weightA;
    }
    
  });
    
      return {
        ...state,
        allDogs: sortedDogs,
      };
    case DOGS_BY_NAME:
      return {
        ...state,
        allDogs: action.payload,
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };

    case FILTER_DOGS_BY_TEMPERAMENT:
    

      if (action.payload === "All") {
        return {
          ...state,
          allDogs: [...state.allDogs.sort((a, b) => a.id - b.id)],
          filteredDogs: [],
        };
      }
      const filteredDogs = state.allDogs.filter((dog) =>
      dog.temperaments.includes(action.payload)
       );
    case FILTER_DOGS_BY_ORIGIN:
      if (action.payload === "All") {
        return {
          ...state,
          allDogs: [...state.allDogs.sort((a, b) => a.id - b.id)],
          filteredDogs: [],
        };
      }
      if (action.payload === "yes") {
        return {
          ...state,
          filteredDogs: state.allDogs.filter((dog) => dog.createdInDb),
        };
      }
      if (action.payload === "no") {
        return {
          ...state,
          filteredDogs: state.allDogs.filter((dog) => !dog.createdInDb),
        };
      }
      

      return {
        ...state,
          filteredDogs: filteredDogs,
        };
    default:
      return state;
  }
};

export default dogsReducer;

