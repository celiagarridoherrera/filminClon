
import './App.css';
import SeriesPage from './components/Seriespage';
import FilmsPage from './components/FilmsPage';
import './components/styles.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

import './App.css'
import { fetchData } from './api';
import { useState, useEffect } from 'react';
import Slider from './Components/Slider/Slider';import Footer from './components/Footer/Footer'

import { CategoryCarousel } from './components/Categories/Categories';

function App() {

  const [movies, setMovies] = useState({});
  const page = 6;

  useEffect(() => {
    const fetchMovies = async () => {

      const storedMovies = localStorage.getItem(`movies_page_${page}`)
      console.log(storedMovies)

      if (!storedMovies) {
        try {
          const resultado = await fetchData(page);
          localStorage.setItem(`movies_page_${page}`, JSON.stringify(resultado));
          console.log("Datos obtenidos en el localStorage:", resultado)
          setMovies(resultado)
        } catch (error) {
          console.error(`Error al conectar a la API: ${error}`)
          alert("Intente de nuevo más tarde");
        }
      } else {
        setMovies(JSON.parse(storedMovies))
        console.log("Ya hay datos en el localStorage para la página:", page);
        console.log(JSON.parse(storedMovies));
      }

    }
    fetchMovies();
  }, [page])

return (
  <>
    <Slider/>

   <Router>
      <Navbar />
    </Router>
    <CategoryCarousel movies={movies}></CategoryCarousel>
    <CategoryCarousel movies={movies}></CategoryCarousel>
    <CategoryCarousel movies={movies}></CategoryCarousel>
    <CategoryCarousel movies={movies}></CategoryCarousel>
    <Footer></Footer>
    </>
  );
}

export default App;
