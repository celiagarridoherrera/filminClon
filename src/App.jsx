import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import FilmsPage from "./components/Films/Filmspage";
import SeriesPage from "./components/Series/Seriespage";
import Footer from "./components/Footer/Footer";
import './components/stylespage.css';
import "./app.css"
import { HomePage } from "./components/HomePage/HomePage";

function App() {
  return (
    <Router basename="/filminClon">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/films" element={<FilmsPage />} />
        <Route path="/series" element={<SeriesPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

