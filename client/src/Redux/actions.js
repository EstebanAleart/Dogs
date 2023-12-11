
export const ALL_DOGS = "ALL_DOGS";


export const getDogs = () => {
    return async (dispatch) => {
        try {
            
            const response = await fetch('http://localhost:3001/dogs');
            const data = await response.json();

            
            dispatch({
                type: ALL_DOGS,
                payload: data,
            });
        } catch (error) {
            
            console.error("Error al obtener todos los perros:", error);
        }
    };
};
