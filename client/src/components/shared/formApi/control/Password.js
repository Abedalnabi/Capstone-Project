import { useTheme } from '@mui/material/styles';
import { TextField } from '@mui/material';
import { getInputValue } from '../FormHelper';
import style from './style';

const Password = ({ stateName, eventInputValue, formStates }) => {
  const theme = useTheme();
  const handleChange = (e) => {
    eventInputValue(stateName, e.target.value);
  };

  return (
    <TextField
      sx={{ ...style.passwordStyle, border: `1px solid ${theme.palette.primary.dark}` }}
      InputLabelProps={{ style: { color: 'white' } }}
      inputProps={{ style: { color: 'white' } }}
      required
      id={stateName}
      type="password"
      label={stateName}
      onChange={handleChange}
      value={getInputValue(stateName, formStates)}
    />
  );
};

export default Password;
