import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import style from '../style';
import { useTheme } from '@mui/material/styles';
import { getUserByID } from '../../../../api/graphql/profile';
import useUserContext from '../../../../contextApi/contexts/UserContext';
import userType from '../../../../enums/enums';
import STATIC_TEXT from '../staticText';

const GetProfile = () => {
  const { userInfo, setUserDetails, userDetails } = useUserContext();
  const theme = useTheme();

  useEffect(() => {
    getUserDetails(userInfo.userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  async function getUserDetails(userId) {
    const userDetailsInfo = await getUserByID(userId);
    setUserDetails(userDetailsInfo);
  }

  return (
    <Box sx={{ ...style.textContainerStyle }}>
      <Typography
        sx={{ mb: '40px', fontWeight: 'bold' }}
        color={theme.palette.primary.light}
        variant="h5"
        component="h2"
      >
        {userDetails.fullName} {userDetails.role_id === userType.user ? '(User)' : '(Gym)'}
      </Typography>

      <Typography color={theme.palette.primary.light} variant="h6" component="h2">
        {STATIC_TEXT.email} {userDetails.email}
      </Typography>
      <Typography color={theme.palette.primary.light} variant="h6" component="h2">
        {STATIC_TEXT.birthDate} {userDetails.birthDate}
      </Typography>
      {userDetails.sport && (
        <Typography color={theme.palette.primary.light} variant="h6" component="h2">
          {STATIC_TEXT.sport} {userDetails.sport.type}
        </Typography>
      )}
    </Box>
  );
};

export default GetProfile;
