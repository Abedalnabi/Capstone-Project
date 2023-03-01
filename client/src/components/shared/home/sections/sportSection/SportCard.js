import React from 'react';
import { useTheme } from '@mui/material/styles';
import style from '../../style.js';
import STATIC_TEXT from '../../staticText';
import { useNavigate } from 'react-router-dom';
import { Box, Card, CardMedia, CardContent, Typography, CardActions, Button, Grid } from '@mui/material';

const icons = [
  require('../../../assets/img/swimming.png'),
  require('../../../assets/img/tennis.png'),
  require('../../../assets/img/boxing.png'),
  require('../../../assets/img/running.png'),
  require('../../../assets/img/yoga.png'),
  require('../../../assets/img/ballet.png'),
];

const SportCard = (props) => {
  const navigate = useNavigate();
  const theme = useTheme();

  function handleClick(sportId) {
    navigate(`/sportGymList/${sportId}`);
  }

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box sx={{ ...style.sportCard.boxStyle }}>
        <Card sx={{ ...style.sportCard.cardStyle, bgcolor: theme.palette.black.main }}>
          <CardMedia
            sx={{ ...style.sportCard.cardMediaStyle }}
            component="img"
            image={icons[props.index]}
            alt={props.type}
          />
          <CardContent sx={{ p: 0, pt: 2, m: 0 }}>
            <Typography gutterBottom variant="h6" component="div" color={theme.palette.primary.light}>
              {props.type}
            </Typography>
            <Typography variant="p" color={theme.palette.primary.light}>
              {props.description}
            </Typography>
          </CardContent>
          <CardActions sx={{ ...style.sportCard.CardActions }}>
            <Button
              variant="contained"
              onClick={() => {
                handleClick(props.sportId);
              }}
              sx={{ color: 'black', bgColor: 'primary', fontWeight: 'bold' }}
              size="small"
            >
              {STATIC_TEXT.showGym}
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
};

export default SportCard;
