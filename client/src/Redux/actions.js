import axios from "axios";

export const ALL_DOGS = "ALL_DOGS";
export const NEW_DOG = "NEW_DOG";


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