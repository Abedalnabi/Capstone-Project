import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useForm from '../../../formApi/useForm';
import FormControl from '../../../formApi/FormControl';
import STATIC_TEXT from './staticText';
import style from './style.js';
import { useParams } from 'react-router-dom';
import userType from '../../../../../enums/enums';
import { useNavigate } from 'react-router-dom';
import { goToTop } from '../../../common/goToTop';

const RegisterPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { type } = useParams();

  let role_id = userType.user;
  if (type === 'Gym') role_id = userType.gym;
  const roleIdObject = { name: 'role_id', value: role_id };

  const [formStates, setFormStates] = useState({
    fields: [
      { control: 'text', name: 'fullName', value: '' },
      { control: 'date', name: 'birthDate', value: '' },
      { control: 'text', name: 'email', value: '' },
      { control: 'password', name: 'password', value: '' },
      { control: 'file', name: 'file', value: '' },
      type === 'Gym' && { control: 'select', name: 'sport_id', value: '' },
      { ...roleIdObject },
    ],
  });

  const handleRegister = (e) => {
    e.preventDefault();
    register();
  };
  useEffect(() => {
    goToTop();
  }, []);

  const { eventInputValue, register, message } = useForm(formStates, setFormStates);

  return (
    <Box sx={style.containerStyle}>
      <Box
        sx={{
          ...style.boxForStyle,
          bgcolor: theme.palette.black.main,
        }}
      >
        <form onSubmit={handleRegister} style={style.formStyle}>
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
          <Button type="submit" variant="contained" size="large">
            {STATIC_TEXT.submit}
          </Button>
          <p onClick={() => navigate(-1)} style={{ color: 'white', cursor: 'pointer' }}>
            {STATIC_TEXT.back}
          </p>
          <p style={{ color: 'white' }}>{message}</p>
        </form>
      </Box>
    </Box>
  );
};

export default RegisterPage;
