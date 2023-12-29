import axios from "axios";

export const ALL_DOGS = "ALL_DOGS";
export const NEW_DOG = "NEW_DOG";
export const ORDER_DOGS_BY_NAME = "ORDER_DOGS_BY_NAME";
export const DOGS_BY_NAME = "DOGS_BY_NAME";
export const ORDER_DOGS_BY_WEIGHT = "ORDER_DOGS_BY_WEIGHT";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const FILTER_DOGS_BY_TEMPERAMENT = "FILTER_DOGS_BY_TEMPERAMENT";
export const FILTER_DOGS_BY_ORIGIN = "FILTER_DOGS_BY_ORIGIN";

export const getDogs = () => {
    return async (dispatch) => {
        const endpoint = "http://localhost:3001/dogs";
        try {
            
            const response = await axios.get(endpoint);
            const {data}=response;

            
            dispatch({
                type: ALL_DOGS,
                payload: data,
            });
        } catch (error) {
            
            console.error("Error al obtener todos los perros:", error);
        }
    };
};

export const postDog = (payload) => {
    const endpoint= "http://localhost:3001/dogs";
    return async (dispatch)=>{
        try {
            const response= await axios.post(endpoint, payload);
            console.log(response);
            const {data}=response;
            return dispatch ({
                type: NEW_DOG,
                payload: data,
            });
        } catch (error) {
            console.error("Error creating new dog", error.message);
        }
    }
}

export const orderDogsByName = (payload) => {
    return {
        type: ORDER_DOGS_BY_NAME,
        payload,
    };
};
export const orderDogsByWeight = (payload) => {
    return {
        type: ORDER_DOGS_BY_WEIGHT,
        payload,
    };
};

export const searchDogsByName = (payload) => {  
    return async (dispatch) => {
        const endpoint = `http://localhost:3001/dogs/?name=${payload}`;
        try {
            const response = await axios.get(endpoint);
            const {data}=response;
            dispatch({
                type: DOGS_BY_NAME,
                payload: data,
            });
        } catch (error) {
            window.alert("Dog not found");
            console.error("Error getting dogs:", error);
        }
    };
}

export const getTemperaments = () => {
    return async (dispatch) => {
        const endpoint = "http://localhost:3001/temperaments";
        try {
            const response = await axios.get(endpoint);
            const {data}=response;
            return dispatch({
                type: GET_TEMPERAMENTS,
                payload: data,
            });
        } catch (error) {
            console.error("Error getting temperaments:", error);
        }
    };
}

export const filterDogsByTemperament = (temp) => {
    return {
        type: FILTER_DOGS_BY_TEMPERAMENT,
        payload: temp,
    };
}

export const filterDogsByOrigin = (origin) => {
    return {
        type: FILTER_DOGS_BY_ORIGIN,
        payload: origin,
    };
}