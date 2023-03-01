import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { deleteUserByID } from '../../../../api/graphql/profile';
import { removeStorage } from '../../../../config/storage';
import useUserContext from '../../../../contextApi/contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import STATIC_TEXT from '../staticText';
import style from '../style';

const DeleteProfile = (props) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { userDetails, setToken } = useUserContext();
  const [deleteMessage, setDeleteMessage] = useState('');

  function handelDeleUser() {
    deleteUserByID(userDetails.user_id);
    setToken('');
    removeStorage('token');
    setDeleteMessage('User delete successfully');
    setTimeout(() => {
      navigate('/');
    }, 1000);
  }

  return (
    <Box sx={{ ...style.deleteContainerStyle }}>
      <Typography sx={{ textAlign: 'center' }} color={theme.palette.primary.light} variant="h6" component="h2">
        {STATIC_TEXT.areUSure}
      </Typography>
      <Box sx={{ ...style.deleteBox }}>
        <Button onClick={handelDeleUser} sx={{ m: 1, mt: 5, width: '90%' }} variant="contained" size="large">
          {STATIC_TEXT.deleteBtn}
        </Button>
        <Button
          onClick={() => {
            props.setShowBtn(true);
            props.setShowGet(true);
            props.setShowDelete(false);
          }}
          sx={{ m: 1, width: '90%' }}
          variant="contained"
          size="large"
        >
          {STATIC_TEXT.cancelBtn}
        </Button>
        <p style={{ color: 'white' }}>{deleteMessage}</p>
      </Box>
    </Box>
  );
};

export default DeleteProfile;
