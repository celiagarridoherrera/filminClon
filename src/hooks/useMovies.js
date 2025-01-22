import { useState, useEffect } from "react";
import { fetchMovies } from "../services/fetchMovies";

export const useMovies = (page) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        const loadMovies = async () => {
            
            const response = await fetchMovies(page);
            setMovies(response.results || []);
        };

        loadMovies();
        
    }, [page]);

    return movies;
}