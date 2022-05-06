import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const DenseAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="warning">
        <Toolbar variant="dense" sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" color="inherit" component="div">
            Movie App
          </Typography>
          <Box>
            <Button sx={{ margin: '0 10px' }} variant="contained"><Link to="/">Movies</Link></Button>
            <Button variant="contained"><Link to="/table">Table</Link></Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default DenseAppBar;
