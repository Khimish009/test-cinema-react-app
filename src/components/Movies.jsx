import MovieCard from './MovieCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Pagination from './common/Pagination';
import { movies } from '../json/index';

const Movies = () => {

  return (
    <Box sx={{ width: '80%', margin: 'auto', flexGrow: 1, mt: 5, mb: 5 }}>
      <Grid container spacing={2} justifyContent="space-between">
        {movies.films.map(movie => (
            <MovieCard key={movie.filmId} movie={movie} />
        ))}
      </Grid>
    </Box>
  )
}

export default Movies;
