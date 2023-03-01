import React from 'react';
import { Grid, Box, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import STATIC_TEXT from './staticText';
import style from './style';
const icons = [require('../../../assets/img/user.png'), require('../../../assets/img/gym.png')];

const RegisterWayCard = ({ registerWay, index }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  function gotTo(path) {
    navigate(path);
  }

  return (
    <Grid item sx={{ ...style.registerWayCard.gridStyle }}>
      <Box sx={{ ...style.registerWayCard.boxStyle }}>
        <Card sx={{ ...style.registerWayCard.cardStyle, bgcolor: theme.palette.black.main }}>
          <CardMedia
            sx={{ ...style.registerWayCard.cardMediaStyle }}
            component="img"
            image={icons[index]}
            alt={registerWay}
          />
          <CardContent sx={{ ...style.registerWayCard.cardContentStyle }}>
            <Typography gutterBottom variant="h5" color={theme.palette.primary.light}>
              {registerWay}
            </Typography>
            <Typography variant="p" color={theme.palette.primary.light}>
              {`${STATIC_TEXT.joinUs}${registerWay}`}
            </Typography>
          </CardContent>
          <CardActions sx={{ ...style.registerWayCard.cardActions }}>
            <Button
              onClick={() => {
                gotTo(registerWay);
              }}
              size="small"
            >
              {STATIC_TEXT.Join}
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
};

export default RegisterWayCard;
