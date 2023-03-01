import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import STATIC_TEXT from './staticText';
import style from './style';

const VerifyAccount = () => {
  const navigate = useNavigate();

  function goToLogin() {
    navigate('/login');
  }
  return (
    <Box sx={style.verifyMainContainerStyle}>
      <Typography variant="h4">{STATIC_TEXT.activeAccount}</Typography>
      <Button onClick={goToLogin} sx={{ mt: 5 }} type="submit" variant="contained" size="large">
        {STATIC_TEXT.goToLogin}
      </Button>
    </Box>
  );
};

export default VerifyAccount;
