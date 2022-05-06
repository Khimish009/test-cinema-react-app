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
          <Typography variant="h6" sx={{ color: '#fff' }} component="div">
            Movie App
          </Typography>
          <Box>
            <Link style={{ textDecoration: 'none' }} to="/">
              <Button sx={{ margin: '0 10px' }} variant="contained">
                Movies
              </Button>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/table">
              <Button variant="contained">
                Table
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default DenseAppBar;
