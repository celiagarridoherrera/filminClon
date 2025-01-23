import { fetchData } from "./fetchData";


export const fetchMovies = async (page) => {

    try 
        {
            const resultado = await fetchData(page);
            console.log("Datos obtenidos:", resultado)
            return resultado

        } catch (error)
        {
            console.error(`Error al conectar a la API: ${error}`)
            alert("Intente de nuevo más tarde");
            return null;
        }          
}