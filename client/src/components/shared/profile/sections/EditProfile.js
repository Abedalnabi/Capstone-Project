import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import useForm from '../../formApi/useForm';
import FormControl from '../../formApi/FormControl';
import useUserContext from '../../../../contextApi/contexts/UserContext';
import { updateUser } from '../../../../api/graphql/profile';
import style from '../style';
import STATIC_TEXT from '../staticText';

const EditProfile = (props) => {
  const { setUserDetails, userDetails } = useUserContext();

  const [formStates, setFormStates] = useState({
    fields: [
      { control: 'text', name: 'fullName', value: userDetails.fullName },
      { control: 'date', name: 'birthDate', value: userDetails.birthDate },
      { control: 'text', name: 'email', value: userDetails.email },
      { control: 'password', name: 'password', value: '' },
    ],
  });
  const { eventInputValue, message, getCurrentFormValues, setMessage } = useForm(formStates, setFormStates);

  async function handelSave(e) {
    const newUserInfo = await getCurrentFormValues(e);
    await updateUser(newUserInfo, userDetails.user_id);
    setUserDetails({ ...userDetails, ...newUserInfo });
    setMessage('Updated Successfully');
  }

  return (
    <Box sx={{ ...style.editContainer }}>
      <form onSubmit={handelSave} style={{ ...style.editForm }}>
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

        <Button type="submit" sx={{ m: 1, mt: 3, width: '90%' }} variant="contained" size="large">
          {STATIC_TEXT.saveBtn}
        </Button>
      </form>
      <Button
        onClick={() => {
          props.setShowBtn(true);
          props.setShowGet(true);
          props.setShowEdit(false);
        }}
        sx={{ m: { xs: 1, sm: 1, md: 1 }, width: '90%' }}
        variant="contained"
        size="large"
      >
        {STATIC_TEXT.cancelBtn}
      </Button>
      <p style={{ color: 'white' }}>{message}</p>
    </Box>
  );
};

export default EditProfile;
