import { TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { getInputValue } from '../FormHelper';
import style from './style';

const Text = ({ stateName, eventInputValue, formStates }) => {
  const theme = useTheme();

  const handleChange = (e) => {
    eventInputValue(stateName, e.target.value);
  };

  return (
    <TextField
      sx={{ ...style.TextStyle, border: `1px solid ${theme.palette.primary.dark}` }}
      InputLabelProps={{
        style: { color: 'white' },
      }}
      inputProps={{ style: { color: 'white' } }}
      required
      id={stateName}
      type={stateName === 'email' ? 'email' : 'text'}
      label={stateName}
      onChange={handleChange}
      value={getInputValue(stateName, formStates)}
    />
  );
};

export default Text;
