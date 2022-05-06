import {
  Routes,
  Route,
} from "react-router-dom";
import Movies from './Movies';
import Movie from './Movie';
import TableMovies from './TableMovies';

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/table" element={<TableMovies />} />
      <Route path="/movies/:id" element={<Movie />} />
    </Routes>
  )
}

export default Main;
