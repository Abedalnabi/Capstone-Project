import React, { useEffect } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import SportCard from './SportCard';
import { getAllSports } from '../../../../../api/graphql/sport';
import useSportContext from '../../../../../contextApi/contexts/SportContext';
import { useTheme } from '@mui/material/styles';
import STATIC_TEXT from '../../staticText';

const SportSection = () => {
  const { sports, setSport } = useSportContext();
  const theme = useTheme();

  useEffect(() => {
    getSports();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getSports() {
    const allSports = await getAllSports();
    setSport(allSports);
  }

  const sportCards = sports.map((sport, i) => {
    return (
      <SportCard
        key={i}
        sportId={sport.sport_id}
        type={sport.type}
        description={sport.description}
        index={i}
      ></SportCard>
    );
  });

  return (
    <Box sx={{ py: '50px' }} id="sport-section">
      <Typography color={theme.palette.secondary.dark} sx={{ textAlign: 'center', mb: 5 }} variant="h4">
        {STATIC_TEXT.choseSport}
      </Typography>

      <Grid
        sx={{ width: { xs: '100%', sm: '100%', md: '90%' } }}
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        container
        margin="auto"
      >
        {sportCards}
      </Grid>
    </Box>
  );
};

export default SportSection;
