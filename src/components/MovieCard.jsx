import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const MovieCard = () => {
  return (
    <Grid item>
      <Card
        sx={{
          maxWidth: 240,
          boxShadow: `8px 7px 5px -1px rgb(0 0 0 / 40%),
          0px 1px 1px 0px rgb(0 0 0 / 11%),
          -6px -1px 3px 0px rgb(0 0 0 / 14%)`
        }}
      >
      <CardMedia
        component="img"
        alt="green iguana"
        sx={{
          width: 240,
        }}
        image="https://kinopoiskapiunofficial.tech/images/posters/kp_small/435.jpg"
      />
      <CardContent sx={{ padding: '10px 5px !important', backgroundColor: '#1a191f' }}>
        <Typography variant="subtitle1" component="div" sx={{ color: '#fff' }}>
          Lizard
        </Typography>
        <Typography variant="subtitle2" color="yellow">
          мелодрама, комедия
        </Typography>
      </CardContent>
    </Card>
    </Grid>
  );
}

export default MovieCard;
