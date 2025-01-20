import './App.css'
import { CategoryCarousel } from './components/Categories/Categories';
function App() {
  const movies = [
  { title: "Pelicula 1" },
  { title: "Pelicula 2" },
  { title: "Pelicula 3" },
  { title: "Pelicula 4" },
  { title: "Pelicula 5" },
  { title: "Pelicula 6" },
  { title: "Pelicula 7" },
  { title: "Pelicula 8" },
  { title: "Pelicula 9" },
  { title: "Pelicula 10" },
  ]

  return (
    <>
    <CategoryCarousel movies={movies}></CategoryCarousel>
    </>
  )
}

export default App
