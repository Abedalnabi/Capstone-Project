import React, { useEffect, useState } from 'react';
import { getUserBySportID } from '../../../api/graphql/sport';
import useSportContext from '../../../contextApi/contexts/SportContext';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import style from './style';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button, CardMedia } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Loader from '../Utilities/Loader/Loader';
import STATIC_TEXT from './staticText';
import { goToTop } from '../common/goToTop';

export default function GymList() {
  const [loader, setLoader] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const { sportId } = useParams();

  const { sportList, setSportList } = useSportContext();

  useEffect(() => {
    SportList();
    goToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function SportList() {
    const listOfSport = await getUserBySportID(sportId);
    setSportList(listOfSport);
    setLoader(true);
  }

  return (
    <Box>
      {loader && (
        <Grid
          sx={{ width: { xs: '100%', sm: '100%', md: '90%' }, pt: '100px' }}
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          container
          margin="auto"
        >
          {sportList.map((gym, gymIndex) => {
            return (
              <Grid key={gymIndex} item xs={12} sm={6} md={4}>
                <Box sx={{ ...style.sportCard.boxStyle }}>
                  <Card
                    sx={{
                      ...style.sportCard.cardStyle,
                      bgcolor: theme.palette.black.main,
                    }}
                  >
                    <CardMedia
                      sx={{ ...style.sportCard.cardMediaSportListStyle, objectFit: 'cover' }}
                      component="img"
                      image={gym.image}
                      alt={gym.fullName}
                    />
                    <Box sx={{ px: 1 }}>
                      <CardContent sx={{ p: 0, m: 0 }}>
                        <Typography gutterBottom variant="h5" component="div" color={theme.palette.primary.light}>
                          {gym.fullName}
                        </Typography>
                      </CardContent>
                      <CardActions sx={{ ...style.sportCard.CardActions }}>
                        <Button
                          onClick={() => {
                            navigate(`/gymPage/${gym.user_id}`);
                          }}
                          variant="contained"
                          sx={{ color: 'black', bgColor: 'primary', fontWeight: 'bold' }}
                          size="small"
                        >
                          {STATIC_TEXT.showGymDetails}
                        </Button>
                      </CardActions>
                    </Box>
                  </Card>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      )}
      {!loader && <Loader />}
    </Box>
  );
}
