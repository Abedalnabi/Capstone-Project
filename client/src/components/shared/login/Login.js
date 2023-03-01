import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useForm from '../formApi/useForm';
import FormControl from '../formApi/FormControl';
import STATIC_TEXT from './staticText';
import { useNavigate } from 'react-router-dom';
import style from './style.js';
import { goToTop } from '../common/goToTop';

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [formStates, setFormStates] = useState({
    fields: [
      { control: 'text', name: 'email', value: '' },
      { control: 'password', name: 'password', value: '' },
    ],
  });

  useEffect(() => {
    goToTop();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    login();
  };

  const { eventInputValue, login, message } = useForm(formStates, setFormStates);

  return (
    <Box sx={style.containerStyle}>
      <Box
        sx={{
          ...style.boxForStyle,
          bgcolor: theme.palette.black.main,
        }}
      >
        <form onSubmit={handleLogin} style={style.formStyle}>
          {formStates.fields.map((field, i) => {
            return (
              <FormControl
                key={i}
                control={field.control}
                stateName={field.name}
                label={field.name}
                formStates={formStates}
                eventInputValue={eventInputValue}
              />
            );
          })}
          <p onClick={() => navigate('/registerWay')} style={{ color: 'white', cursor: 'pointer', marginTop: '-21px' }}>
            {STATIC_TEXT.haveNotAccount}
          </p>
          <Button type="submit" variant="contained" size="large">
            {STATIC_TEXT.login}
          </Button>
          <p style={{ color: 'white' }}>{message}</p>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
