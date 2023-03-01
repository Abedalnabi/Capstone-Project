import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const CircularIndeterminate = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        margin: '50px',
        marginTop: '80px',
        minHeight: '800px',
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default CircularIndeterminate;
