import MovieCard from './MovieCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Movies = () => {

  return (
    <Box sx={{ width: '80%', margin: 'auto', flexGrow: 1, mt: 5 }}>
          <Grid container spacing={2} justifyContent="space-between">
            {[1,2,3,4,5,6,7,8].map(item => (
                <MovieCard />
            ))}
          </Grid>
        </Box>
  )
}

export default Movies;
