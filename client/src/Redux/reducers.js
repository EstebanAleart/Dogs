import { ALL_DOGS } from "./actions";

const initialState = {
  allDogs: [],
};

const dogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_DOGS:
        return {
            ...state,
            allDogs: action.payload,
        };


    default:
      return state;
  }
};

export default dogsReducer;

