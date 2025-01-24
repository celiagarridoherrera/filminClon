export async function fetchData(page) 
{
    const language = "es-ES"
    const account_id = import.meta.env.VITE_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${account_id}&language=${language}&page=${page}`
    
    try 
    {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error de red: ${response.status}`);
        return await response.json();
        
    } catch (error)
    {
        console.error(`Error al obtener los datos: ${error}`);
        throw error
    }

}