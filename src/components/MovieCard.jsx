import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const MovieCard = () => {
  return (
    <Grid item>
      <Card sx={{ maxWidth: 240 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        sx={{
          width: 240,
        }}
        image="https://kinopoiskapiunofficial.tech/images/posters/kp_small/435.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
      </CardContent>
    </Card>
    </Grid>
  );
}

export default MovieCard;
