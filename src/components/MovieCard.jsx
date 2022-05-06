import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import { Link } from "react-router-dom";

const MovieCard = ({movie}) => {
  const genres = movie.genres.map(item => item.genre);

  return (
    <Grid item>
      <Link style={{ textDecoration: 'none' }} to={`/movies/${movie.filmId}`}>
        <Card
          sx={{
            maxWidth: 240,
            boxShadow: `8px 7px 5px -1px rgb(0 0 0 / 40%),
            0px 1px 1px 0px rgb(0 0 0 / 11%),
            -6px -1px 3px 0px rgb(0 0 0 / 14%)`,
            height: '100%',
            backgroundColor: '#1a191f',
          }}
        >
          <CardMedia
            component="img"
            alt="movie poster"
            sx={{
              width: 240,
            }}
            image={movie.posterUrl}
          />
          <CardContent sx={{ padding: '10px 5px !important'}}>
            <Tooltip title={movie.nameRu}>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  color: '#fff',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {movie.nameRu}
              </Typography>
            </Tooltip>
            <Typography variant="subtitle2" color="yellow">
              {genres[1] ? `${genres[0]}, ${genres[1]}` : `${genres[0]}`}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}

export default MovieCard;
