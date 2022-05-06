import MovieCard from './MovieCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Filters from './common/Filters';
import { movies } from '../json/index';

const Movies = () => {
  const countries = movies.films.map(movie => movie.countries[0].country)

  return (
    <Box sx={{ width: '80%', margin: 'auto', flexGrow: 1, mt: 5, mb: 5 }}>
      <Filters />
      <Grid container spacing={2} justifyContent="space-between">
        {movies.films.map(movie => (
            <MovieCard key={movie.filmId} movie={movie} />
        ))}
      </Grid>
    </Box>
  )
}

export default Movies;
