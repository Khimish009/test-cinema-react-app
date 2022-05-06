import {
  Routes,
  Route,
} from "react-router-dom";
import Movies from './Movies';
import Movie from './Movie';

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/movies/:id" element={<Movie />} />
    </Routes>
  )
}

export default Main;
