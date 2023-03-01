import React from 'react';
import { Grid, Typography } from '@mui/material';
import STATIC_TEXT from './staticText';
import RegisterWayCard from './RegisterWayCard';
import style from './style';

const RegisterWay = () => {
  return (
    <>
      <Typography variant="h5" sx={{ ...style.registerWay.typographyStyle }}>
        {STATIC_TEXT.register}
      </Typography>

      <Grid
        sx={{ ...style.registerWay.gridStyle }}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {['User', 'Gym'].map((registerWay, index) => {
          return <RegisterWayCard key={index} registerWay={registerWay} index={index} />;
        })}
      </Grid>
    </>
  );
};
export default RegisterWay;
