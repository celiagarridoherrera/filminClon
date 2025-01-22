
import './App.css';
import SeriesPage from './components/Series/Seriespage.jsx';
import FilmsPage from './components/Films/Filmspage.jsx';
import './components/styles.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import './App.css'

import Footer from './components/Footer/Footer'

import { CategoryCarousel } from './components/Categories/Categories';

function App() {
  
  
  
  
  
  return (
      <>
        <Router>
          <Navbar />
        </Router>
        <SeriesPage></SeriesPage>
        <FilmsPage></FilmsPage>
        <CategoryCarousel page={1} ></CategoryCarousel>
        <Footer></Footer>
      </>
    );
}

export default App;
