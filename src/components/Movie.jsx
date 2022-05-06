import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';

const Movie = () => {
  const { id } = useParams();

  return <Typography sx={{color: '#fff'}}>Movie {id}</Typography>
}

export default Movie;
