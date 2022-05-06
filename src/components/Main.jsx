import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Movies from './Movies';
import Movie from './Movie';

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Main;
