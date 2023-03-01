import React, { useState } from 'react';
import { Grid, Box, Button } from '@mui/material';
import style from './style';
import { useTheme } from '@mui/material/styles';
import STATIC_TEXT from './staticText';
import GetProfile from './sections/GetProfile';
import EditProfile from './sections/EditProfile';
import DeleteProfile from './sections/DeleteProfile';
import useUserContext from '../../../contextApi/contexts/UserContext';

const Profile = () => {
  const theme = useTheme();
  const { userDetails } = useUserContext();
  const [showBtn, setShowBtn] = useState(true);
  const [showGet, setShowGet] = useState(true);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  function handelEditBtn() {
    setShowBtn(false);
    setShowGet(false);
    setShowDelete(false);
    setShowEdit(true);
  }

  function handelDeleteBtn() {
    setShowBtn(false);
    setShowGet(false);
    setShowDelete(true);
    setShowEdit(false);
  }

  return (
    <Box sx={{ ...style.containerStyle }}>
      <Box sx={{ ...style.boxForStyle, bgcolor: theme.palette.black.main }}>
        <Grid container>
          <Grid item sx={{ width: '100%' }} xs={5}>
            <Box sx={{ ...style.profileImgContainer, backgroundImage: `url("${userDetails.image}")` }}></Box>
            <Box sx={{ ...style.buttonContainerStyle }}>
              {showBtn && (
                <Button onClick={handelEditBtn} sx={{ ...style.editButtonStyle }} variant="contained" size="large">
                  {STATIC_TEXT.editBtn}
                </Button>
              )}
              {showBtn && (
                <Button onClick={handelDeleteBtn} sx={{ ...style.editButtonStyle }} variant="contained" size="large">
                  {STATIC_TEXT.deleteBtn}
                </Button>
              )}
            </Box>
          </Grid>
          <Grid item xs={7} sx={{ ...style.userInfoContainerStyle }}>
            {showGet && <GetProfile />}
            {showEdit && <EditProfile setShowBtn={setShowBtn} setShowGet={setShowGet} setShowEdit={setShowEdit} />}
            {showDelete && (
              <DeleteProfile setShowBtn={setShowBtn} setShowGet={setShowGet} setShowDelete={setShowDelete} />
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Profile;
