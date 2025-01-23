import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider/Slider";
import { CategoryCarousel } from "./components/Categories/Categories";
import FilmsPage from "./components/Films/Filmspage";
import SeriesPage from "./components/Series/Seriespage";
import Footer from "./components/Footer/Footer";
import './components/stylespage.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Slider page={1} />
              <CategoryCarousel page={1} />
            </>
          } 
        />
        <Route path="/films" element={<FilmsPage />} />
        <Route path="/series" element={<SeriesPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

