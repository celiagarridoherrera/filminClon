import { useState, useEffect } from "react";
import { fetchData } from "../services/fetchData";

export const useMovies = (page) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        const loadMovies = async () => {
            
            const response = await fetchData(page);
            setMovies(response.results || []);
        };

        loadMovies();
        
    }, [page]);

    return movies;
}